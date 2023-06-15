( () => {
    // 即時関数　グローバルを汚染（他のJSファイルでも読み込んでしまう）を防ぐ

    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll("[data-nav]");
    const $content = $tab.querySelectorAll("[data-content]");
            // querySelectorAll　DOM要素の中から条件に当てはまるDOMを取得する
    const ACTIVE_CLASS = "is-active";
    const navLen = $nav.length;
    // init:　initialize JSで最初に実行させたい命令はinitをよく使う
    const init = () => {
        $content[0].style.display = "block";
    };
    init();

    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();
            // クリックイベントを1回殺す　今回ではaタグだから本来ページ遷移の処理が起こるけどそれを止めている（リンク要素無効化）

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetValue = $this.dataset.nav;
                                // dataset.属性名　と入れるとデータ属性の値が取得できる
        // 対象外のnav,contentを全て一旦リセットする
        let index = 0;
        while(index < navLen) {
            $content[index].style.display = "none";
            $nav[index].classList.remove(ACTIVE_CLASS);
            index ++;
        }
        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll($content[targetValue].style.display = "block");
        $nav[targetValue].classList.add(ACTIVE_CLASS);
    };

    // 全nav要素に対して関数を適応・実行
    let index = 0;
    while(index < navLen) {
        $nav[index].addEventListener("click", (e) => handleClick(e));
        index ++;
    }

} ) ();