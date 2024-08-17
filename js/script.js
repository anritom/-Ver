document.addEventListener('DOMContentLoaded', function() {
    const choices = ['グー', 'チョキ', 'パー'];
    
    function playGame(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        document.querySelector('.user-choice').textContent = `あなた: ${userChoice}`;
        document.querySelector('.computer-choice').textContent = `コンピュータ: ${computerChoice}`;
        determineWinner(userChoice, computerChoice);
    }    

    function determineWinner(user, computer) {
        let result;
        if (user === computer) {
            result = "引き分け";
        } else if (
            (user === 'グー' && computer === 'チョキ') ||
            (user === 'チョキ' && computer === 'パー') ||
            (user === 'パー' && computer === 'グー')
        ) {
            result = "勝ち";
        } else {
            result = "負け";
        }
        document.querySelector('.winner').textContent = result;
    }

    document.querySelectorAll('.image-container img').forEach(function(img) {
        img.addEventListener('click', function() {
            const userChoice = this.alt; // 画像のalt属性を使ってジャンケンの手を取得
            playGame(userChoice);
        });
    });
});