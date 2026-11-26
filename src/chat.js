import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function reply(question) {
  const msg = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [{ role: 'user', content: question }],
  });
  return msg.content[0].text;
}
