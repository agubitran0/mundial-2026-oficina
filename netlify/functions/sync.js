exports.handler = async () => {
  try {
    const url = "https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json";
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: e.message })
    };
  }
};
