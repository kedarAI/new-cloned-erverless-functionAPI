exports.handler = async (event, context) => {
  // 1. Kontrola metody (používáme POST, chceme JSON)
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  // 2. Parsing JSON těla
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' })
    };
  }

  // 3. Tady může být třeba volání ChatGPT, Supabase atd.
  // Např. body.text je náš vstup, jen ho vrátíme pro demo:

  const response = {
    message: 'Zpracování proběhlo úspěšně (Netlify Function)!',
    originalInput: body
  };

  // 4. Odpověď
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};
