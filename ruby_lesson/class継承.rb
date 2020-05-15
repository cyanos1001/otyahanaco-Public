#クラスの継承
class User

  def initialize(name)
    @name = name
  end
  
  def sayHi
    puts "hi! i am #{@name}"
  end

end


class AdminUser < User #AdminUserをUserの継承クラスとする。

  def sayHello
    puts "Heloo from #{@name}"
  end

  def sayHi              #satHiを上書き（オーバーライド）する
    puts "hi! from admin!"
  end

end

tom = AdminUser.new("tom")
tom.sayHi
tom.sayHello




#継承元のクラスを親クラス、SuperClassという
#継承先のクラスを子クラス、Subclasssという
#クラスの継承をすると、親クラスの中の要素を使えるようになる
#    ※↑の場合、nameやsayHiなど
#メソッドのオーバーライド...子クラスで同名のメソッドを上書きすること
