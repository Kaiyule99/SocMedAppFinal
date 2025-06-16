const API_URL = 'https://your-api-url.com/tweets'; // replace with your actual endpoint

export const getTweets = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tweets');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const postTweet = async (text) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: text }),
    });

    if (!response.ok) throw new Error('Failed to post tweet');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { id: Date.now(), content: text }; // fallback for local display
  }
};
