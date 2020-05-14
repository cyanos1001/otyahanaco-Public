# puts "15の倍数を入力すると処理を抜けます"
number = 46
# loop do
if number % 5 == 0 && number % 3 == 0
  puts "15の倍数"
  # break
elsif number % 5 == 0
  puts "5の倍数"
elsif number % 3 == 0
  puts "3の倍数"
else
  puts "3の倍数でも5の倍数でもない"
end