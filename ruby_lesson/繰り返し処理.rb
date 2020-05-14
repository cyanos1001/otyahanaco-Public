#whileを使った繰り返し文
i = 0                # iを0とする

while i < 10 do      #iが10より小さい間、次の処理をする
  puts "#{i}: hello" #"i: hell"と表示させる
  i += 1             # i = i + 1  とする
end




#timesを使った繰り返し処理
10.times do |a|        #10回これらの処理を繰り返す ついでに変数aを定義
  puts "#{a}: hello"   #
end

10.times { |i| puts "#{i}: hello"} #↑の処理の略文



