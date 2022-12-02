/* Классы позволяют создавать прототипы для объектов
На основание прототипов создаються экземпляры
Экземпляры могут иметь собственные свойства и методы
Экземпляры наследуют свойства и методы прототипов

* */

class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    upvote() {
        this.votesQty += 1
    }
}


const firstComment = new Comment('First Comment');

firstComment.upvote();
firstComment.upvote();


Object.values(firstComment).forEach(key => console.log(key));

console.log(firstComment instanceof Comment);