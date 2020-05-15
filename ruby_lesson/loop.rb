#loop
=begin


i = 0    #iを0とする
loop do  #これらの処理をループ
  p i    #iをデバック用として表示
  i += 1 #iをi+1  づつ増やす
end

=end


# break    rループを抜ける
# next      ループをいったんスキップする

10.times do |i|    #これらの処理を10回実行する
  if i == 7 then   #iが７のとき
  # break           これらの処理を抜ける
   next            #これらの処理をスキップする
  end
  p i
end

