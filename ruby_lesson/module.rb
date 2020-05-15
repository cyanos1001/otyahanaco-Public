# module...classのようにメソッドや定数をまとまられる。
#　インスタンスを作ったり継承はできない
# -用途　-名前空間
# 2.ミックスインについて
module Movie  #Movieというモジュールを定義する（必ず頭は大文字）

  VERSION = 1.1  #tei定数を定義する

  def self.encode
    puts "ncoding..."
  end

  def self.export
    puts "exporting..."
  end

end


Movie.encode
Movie.export
p Movie::VERSION
#----------------2-----------------

module Debug #Debugというモジュールを定義
  def info   #infoというインスタンスメソッドを定地
    puts "#{self.class} debug info..."
  end
end

class Player
  include Debug   #moduleとして定義したdebugを使える
end

class Monster
  include Debug  #moduleとして定義したdebugを使える
end


Player.new.info    #moduleでで意義しているので、どちらからでも呼び出せる
Monster.new.info

#共通する項目がある場合でも、関連性のないクラスの場合、モジュールをつかってミックスインすることができる
