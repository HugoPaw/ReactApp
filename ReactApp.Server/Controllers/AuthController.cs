using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        // Dummy-Check
        if (request.Username == "admin" && request.Password == "1234")
        {
            // Token generieren (hier: Dummy)
            var token = "fake-jwt-token";
            return Ok(new { token });
        }

        return Unauthorized("Invalid credentials");
    }
}
