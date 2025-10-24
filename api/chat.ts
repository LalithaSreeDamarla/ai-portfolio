import type { VercelRequest, VercelResponse } from '@vercel/node'
import yaml from 'js-yaml'
import { readFileSync } from 'fs'
import { join } from 'path'

interface QAData {
  facts: string[]
  projects: Record<string, {
    description: string
    metrics: string
    tech: string
  }>
  contact: string[]
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Load Q&A data
    const qaPath = join(process.cwd(), 'src/data/qa.yml')
    const qaContent = readFileSync(qaPath, 'utf8')
    const qaData = yaml.load(qaContent) as QAData

    // Create context from Q&A data
    const context = [
      'Facts about Sree:',
      ...qaData.facts,
      '',
      'Project Details:',
      ...Object.entries(qaData.projects).map(([name, details]) => 
        `${name}: ${details.description} | Metrics: ${details.metrics} | Tech: ${details.tech}`
      ),
      '',
      'Contact Information:',
      ...qaData.contact
    ].join('\n')

    const systemPrompt = `You are SreeBot, an AI assistant representing Sree's portfolio. 
    
    Use ONLY the provided facts to answer questions. Be concise, helpful, and professional.
    
    If asked about something not in the facts, politely say you don't have that information and suggest they contact Sree directly.
    
    Context:
    ${context}`

    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.status}`)
    }

    const data = await openaiResponse.json()
    const reply = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."

    return res.status(200).json({ reply })

  } catch (error) {
    console.error('Chat API error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      reply: "I'm having trouble right now. Please try again later or contact Sree directly!"
    })
  }
}