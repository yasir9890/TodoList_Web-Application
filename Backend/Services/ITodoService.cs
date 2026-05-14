using TodoApi.DTOs;
using TodoApi.Models;

namespace TodoApi.Services
{
    public interface ITodoService
    {
        Task<List<Todo>> GetAllAsync();
        Task<Todo?> GetByIdAsync(Guid id);
        Task<List<Todo>> GetByNameAsync(string name);
        Task<Todo> CreateAsync(CreateDto dto);
        Task<Todo?> UpdateAsync(Guid id, UpdateDto dto);
        Task <bool> DeleteAsync(Guid id);
    }
}
