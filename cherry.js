
document.addEventListener('DOMContentLoaded', function () {
    // 显示模拟框
    function showModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }

    // 准备好了，开始动画和播放音乐
    document.getElementById('ready-btn').addEventListener('click', function () {
        // 开始打字和樱花效果
        typeLetter();
        createSakuraLoop(); // 创建樱花的循环，假设已经在下面定义了此函数

        // 播放音乐
        var audio = new Audio('resource/1.mp3');
        audio.play();

        // 关闭模拟框
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    });

    // 没准备好，返回原页面
    document.getElementById('not-ready-btn').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    showModal(); // 调用模拟框显示函数

    const text = `李欣然，转眼间我们的相识已经迎来了百日的花开，这一百天，是我们共同走过的旅程，也是我由衷感恩和珍视的时光。从你的笑声到你的每一个微小的喜怒哀乐，都已经成为我日常生活中最温馨的一部分。
在这特别的一天，我想用一种更加特别的方式对你说：我喜欢你，并不仅仅因为你现在是我的女朋友，而是因为你是那个让我心动、让我愿意用整个生命去呵护和珍惜的人。过去的每一天，我们彼此了解，我们一起笑过、哭过、成长过，你为我生活中的每一天注入了新的意义。而今，我更想对你说：“我爱你”，这份情感比初见时分更深，比昨天更浓，愿这份感情随着时间的流逝如葡萄酒一般醇厚迷人。
在未来的日子里，不管风雨、晴朗，请让我牵着你的手，一起携手前行。百日的纪念只是我们爱情长卷中的一个美好篇章，我愿与你共绘我们的故事，直到永远。李欣然，我愿这份表白如同百日的赞歌，唱给我们已经拥有的，以及即将到来的无数个精彩百日。`; // 文本内容保持不变
    const typingDelay = 100; // 打字的延迟时间，单位是毫秒
    let index = 0;
    const typedTextElement = document.getElementById('typed-text');

    function typeLetter() {
        if (index < text.length) {
            typedTextElement.textContent += text[index];
            index++;
            setTimeout(typeLetter, typingDelay);
        }
    }

    function createSakura() {
        // 创建樱花元素
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');

        // 在一个小范围内随机产生樱花的起始位置
        const startX = Math.random() * 100; // 0到视口宽度5%的位置开始
        const startY = Math.random() * 5; // 0到视口高度5%的位置开始

        const endX = 100 * (Math.random() - 0.5); // 结束位置的横向随机因子

        sakura.style.left = `${startX}vw`;
        sakura.style.top = `${startY}vh`;

        // 使用CSS变量设置水平方向的移动距离
        sakura.style.setProperty('--x-translate', `${endX}vw`);

        sakura.style.animationDuration = `${Math.random() * 3 + 3}s`; // 飘落动画持续时间

        sakura.innerHTML = `<img src="resource/cherry-blossom.png" alt="Sakura" style="width: 100%;">`; // 确保图片为10px

        document.body.appendChild(sakura);

        // 在樱花飘落结束后移除DOM，避免DOM过度膨胀
        sakura.addEventListener('animationend', () => {
            sakura.remove();
        });
    }

    // 用于开始生成樱花
    function createSakuraLoop() {
        setInterval(createSakura, 100);
    }
});