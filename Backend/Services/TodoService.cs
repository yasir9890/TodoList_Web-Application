using TodoApi.Data;
using TodoApi.Models;
using Microsoft.EntityFrameworkCore;
using TodoApi.DTOs;

namespace TodoApi.Services
{
    public class TodoService:ITodoService
    {
        private readonly AppDbContext _context;
        public TodoService(AppDbContext context)
        {
            _context = context;
        }
       
        //Get All :)
        public async Task<List<Todo>> GetAllAsync()
        { 
            return await
            _context.todos.ToListAsync();

        }

        // get by id
        public async Task<Todo?> GetByIdAsync(Guid id)
        { 
            return await
                _context.todos.FindAsync(id);
        
        }

        //get by name 
        public async Task<List<Todo>> GetByNameAsync(string name)
        {
            return await 
                _context.todos.Where(t => t.Title.Contains(name)).ToListAsync();
        }

        // create
        public async Task<Todo> CreateAsync(CreateDto dto)
        {
            var todo = new Todo
            {
                Title = dto.Title,
                Description = dto.Description,
                PriorityLevel = dto.PriorityLevel,
                CategoryLevel = dto.CategoryLevel
            };
            _context.todos.Add(todo);
            await
                _context.SaveChangesAsync();
            return todo;
            
        
        }


        //update
        public async Task<Todo?> UpdateAsync(Guid id, UpdateDto dto)
        {
            var todo = await _context.todos.FindAsync(id);
            if (todo == null)
                return null;
            todo.Title = dto.Title;
            todo.Description = dto.Description;
            todo.IsCompleted = dto.IsCompleted;
            todo.PriorityLevel = dto.PriorityLevel;
            todo.CategoryLevel = dto.CategoryLevel;

            await _context.SaveChangesAsync();
            return todo;

        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var todo = await _context.todos.FindAsync(id);
            if (todo == null)
                return false;

            _context.todos.Remove(todo);
            await _context.SaveChangesAsync();

            return true;
        }

    }
}
