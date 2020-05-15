# 例外

class MyError < StandardError; end #StandardErrorをMyErrorに入れる


x = gets.to_i

begin
  if x == 3       #もしｘが３のとき
    raise MyError #MyErrorを発生させる
  p 100 / x
  rescue MyError
    puts "not 3!"
rescue => ex    #例外が発生したオブジェクトをexに入れる
  p ex.message  #exがもっているメッセージを表示させる
  p ex.class    #exがもっているクラス名を表示させる
  puts "stopped!"
ensure          #例外が発生してもしなくても必ず行いたい処理を行う
  puts "----END----"

end

#1.例外が発生しそうな処理をbegin - endで囲う
#2.例外が発生した場合の処理をrescueの後に書いていく
