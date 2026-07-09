export const determineEmotion = (userText: string): string => {
  const lower = userText.toLowerCase();
  if (lower.includes('happy') || lower.includes('cute')) return 'Delighted';
  if (lower.includes('joke') || lower.includes('funny')) return 'Laugh';
  if (lower.includes('sad') || lower.includes('mean')) return 'Sad';
  if (lower.includes('mad') || lower.includes('angry')) return 'Annoyed';
  if (lower.includes('wow') || lower.includes('surprise')) return 'Shocked';
  if (lower.includes('sleep') || lower.includes('tired')) return 'Sleepy';
  if (lower.includes('heh')) return 'Smug';
  
  // Random fallback if no keyword matches
  const randomEmotions = ['normal', 'Smile', 'Smile 2', 'Smug', 'Delighted'];
  return randomEmotions[Math.floor(Math.random() * randomEmotions.length)];
};

export const getWaifuResponse = (emotion: string): string => {
  const responses: Record<string, string[]> = {
    Delighted: ['Aww, thank you! You are so sweet~', 'Hehe, that makes me so happy!'],
    Laugh: ['Ahaha! That is so funny!', 'Pfft... you always know how to make me laugh!'],
    Sad: ['Oh no... please do not say that...', 'That makes me a little sad...'],
    Annoyed: ['Hmph! You can be so mean sometimes!', 'I am ignoring you for a whole minute now!'],
    Shocked: ['W-what?! Really?!', 'I had no idea! That is so surprising!'],
    Sleepy: ['*yawn*... I think it is time for a nap...', 'I am getting a bit sleepy...'],
    Smug: ['Heh, I knew that all along!', 'Of course! I am pretty smart, you know~'],
    Smile: ['That is nice to hear.', 'I see! Tell me more!'],
    'Smile 2': ['Hehe, okay!', 'Sounds good to me~'],
    normal: ['Hmm, I see.', 'Oh, really?']
  };
  
  const possibleResponses = responses[emotion] || responses.normal;
  return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
};
