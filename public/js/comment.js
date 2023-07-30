const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector("#comment").value.trim();
    console.log("Form Submitted!");
  
    if (content) {
      const response = await fetch(`/api/comments`, {
        method: "POST",
        body: JSON.stringify({ content }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to create comment");
      }
    }
  };
  
  const delCommentHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to delete comment");
      }
    }
  };
  
  document
    .querySelector(".new-comment-form")
    .addEventListener("submit", newCommentFormHandler);
  
  document
    .querySelector(".comment-list")
    .addEventListener("click", delCommentHandler);
  