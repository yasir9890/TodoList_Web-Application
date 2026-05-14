using Microsoft.AspNetCore.Mvc;
using TodoApi.DTOs;
using TodoApi.Models;
using TodoApi.Services;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoService _todoService;

        public TodoController(ITodoService todoService)
        {
            _todoService = todoService;
        }

        // get all todos
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var todos = await _todoService.GetAllAsync();
            return Ok(todos);
        }

        // get id by todos
        [HttpGet("{id:guid}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var todo = await _todoService.GetByIdAsync(id);

            if (todo == null)
                return NotFound(new { message = "Todo not found" });

            return Ok(todo);
        }

        // search
        [HttpGet("search")]
        public async Task<IActionResult> GetByName(string name)
        {
            var result = await _todoService.GetByNameAsync(name);
            return Ok(result);
        }

        // Create
        [HttpPost]
        public async Task<IActionResult> Create(CreateDto dto)
        {
            var todo = await _todoService.CreateAsync(dto);
            return Ok(todo);
        }

        // update
        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, UpdateDto dto)
        {
            var todo = await _todoService.UpdateAsync(id, dto);

            if (todo == null)
                return NotFound(new { message = "Todo not found" });

            return Ok(todo);
        }

        // delete
        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var result = await _todoService.DeleteAsync(id);

            if (!result)
                return NotFound(new { message = "Todo not found" });

            return Ok(new { message = "Deleted successfully" });
        }
    }
}