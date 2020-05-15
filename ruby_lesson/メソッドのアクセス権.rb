#アクセス権
# -public    どこからでもアクセスできる（初期値）
# -protected 特殊なのでいったんおいとく
# -private   レシーバーを指定できない

class User

  def sayHi
    puts "hi!"
    sayPrivate
  end

 private

  def sayPrivate
    puts "private"
  end

end

class AdminUser < User

  # def sayHello
  #   puts "hello!"
  #   sayPrivate
  # end
  def sayPrivate
    puts "private from Admin"
  end

end
#User.new.sayPrivate ←これはプライベートなので呼び出せない
# User.new.sayHi
AdminUser.new.sayHello
Adminuser.new.sayPrivate　　　
#↑Userを継承したAdminUserの中でsayPrivateをオーバーライドしているので表示される