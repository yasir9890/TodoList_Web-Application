namespace TodoApi.DTOs
{
    public class CreateDto
    {
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public Priority PriorityLevel { get; set; } = Priority.Medium;

        public Category CategoryLevel { get; set; } = Category.Personal;
    }
}
