using Microsoft.VisualBasic;

namespace TodoApi.Models
{
    public class Todo
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Description { get; set; }
        public bool IsCompleted { get; set; } = false;  
        public Priority PriorityLevel { get; set; } = Priority.Medium;
        public Category CategoryLevel { get; set; } = Category.Personal;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}


public enum Priority 
{
    High,
    Medium,
    Low
}
public enum Category 
{
    Work,
    Personal
}
