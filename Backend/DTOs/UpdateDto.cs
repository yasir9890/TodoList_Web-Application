namespace TodoApi.DTOs
{
    public class UpdateDto
    {
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        public bool IsCompleted { get; set; }

        public Priority PriorityLevel { get; set; }

        public Category CategoryLevel { get; set; }
    }
}
