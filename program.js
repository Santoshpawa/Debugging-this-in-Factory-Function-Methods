function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function() {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  let book1 = createBook("Wings Of Fire","A.P.J Abdul Kalam")

  book1.printInfo()