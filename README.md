# kuromoji-cli

Input `text` and Output tokenized text by [kuromoji.js](https://github.com/takuyaa/kuromoji.js "kuromoji.js").

## Installation

    npm install kuromoji-cli

## Usage

    kuromoji text
    # or
    echo "text" | kuromoji
    
Example

    $ kuromoji 日本語
    [
        {
            "word_id": 871450,
            "word_type": "KNOWN",
            "word_position": 1,
            "surface_form": "日本語",
            "pos": "名詞",
            "pos_detail_1": "一般",
            "pos_detail_2": "*",
            "pos_detail_3": "*",
            "conjugated_type": "*",
            "conjugated_form": "*",
            "basic_form": "日本語",
            "reading": "ニホンゴ",
            "pronunciation": "ニホンゴ"
        }
    ]

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT