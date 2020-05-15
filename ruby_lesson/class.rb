#クラス
# - くらすメソッド
# - クラス変数
# - クラス定数
class User   #class名は大文字からはじめること

  @@count = 0 #countというクラス変数を定義初期値は0

  VERSION = 1.1 #VERSIONというクラス定数を定義値は1.1

#-------------------------------------------------------
  attr_accessor :name #nameにアクセスするためのnameをいうアクセサーを定義
  #name=(value)   値を設定する、setter
  #name           値を取得する、getter
#-------------------------------------------------------
def initialize(name)  #オブジェクト作成時に自動でこの処理を実行する
  @@count += 1
  @name = name
end

  def sayHi    #seyHiメソッドを定義
    #self　　　そのメソッドを受け取るインスタンス自身
    puts "hi! i am #{@name}" #"hi!"と表示する
  end
  def self.info
    puts "#{VERSION}: User Class #{@@count} instances."
  end
end
tom = User.new("tom")
bob = User.new("tom")
otya = User.new("otya")
User.info

p User::VERSION #クラスの外からVERSION(クラス定数)にアクセスする
otya = User.new("otya")  #Userのインスタンスを使う。 "tom" という値を保持する
#-------------------------------------------------------------------
tom.name = "tom Jr."
tom.sayHi #レシーバー
bob.sayHi
#-------------------------------------------------------------------






#メソッド...オブジェクトの操作を定義したもの。動きは関数と同じ
#インスタンス....classが設計図だとしたら、実際に作ったのモノのようなもの
#アクセサー...外部からメソッドにアクセスするためのもの
#gettar...アクセサーの中の役割の一つ　メソッドを取得するもの
#setter...アクセサーの中の役割の一つ　値を設定するもの
#レシーバー...メソッドを受け取っているもの
#とりあえずこのへんはいくらやっても分からんのでおいておく
#クラスメソッド...クラスから直接呼び出すメソッド
