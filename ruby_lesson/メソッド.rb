def sayHi(name = "tom")    #メソッドを定義する引数はname 初期値はtom
  puts "hi! #{name}"   #hi!引数と表示する
  return "hi #{name}"  #hi!引数と返す
end

# sayHi("taguchi")
sayHi "taguchi"    #sayHiメソッドを実行して、"taguchi”と表示する
sayHi



#メソッド...オブジェクトの操作を定義したもの。動きは関数と同じ