signal = gets.chomp  #signal　はユーザーからの入力。改行はなし

case signal          #signalが次の場合、次の処理を行う

when "red"           #redの場合
 puts "stop!"        #"stop"と表示させる
when "green"         #"green"の場合
  puts "Go!"         #"Go!"と表示する
when "yellow"        #"yellow"の場合
  puts "caution!"    #"caution!"と表示する
else                 #それ以外の場合
  puts "wrong signal"#"wrong signal"と表示する
end