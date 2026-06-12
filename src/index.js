export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("POST only", { status: 405 });
    }

    const body = await request.json();

    const stmt = env.DB.prepare(
      "INSERT INTO test_users(name) VALUES(?)"
    );

    await stmt.bind(body.name).run();

    return Response.json({
      success: true
    });
  }
}
