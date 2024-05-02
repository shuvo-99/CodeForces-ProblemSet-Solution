function wayTooLongWords(inp) {
  for (i = 0; i < inp; i++) {
    var word = readline();
    if (word.length > 10) {
      print(word[0] + (word.length - 2) + word[word.length - 1]);
    } else {
      print(word);
    }
  }
}

wayTooLongWords(parseInt(readline()));
