new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("吕志冲 && 张琳琳")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起迎来我们的第一个圆蛋 ~ ~")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();