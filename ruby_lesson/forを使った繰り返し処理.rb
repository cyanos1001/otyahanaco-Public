#for
=begin

for i in 15..20 do #iに15～20の値を入れながら繰り返す
  p i
end

for color in ["red", "blue"] do #colorに"red"と"blue"を入れながら繰り返す
  p color
end

for name, score in {taguchi:200, fkoji:400} do #name,scoreにハッシュの値を入れて繰り返す
  puts "#{name}: #{score}"
end

=end


#each   ↑と同じ処理をeachで書き換えたもの↓
(15..20).each do |r|
  p r
end

["red", "blue"].each do |color|
  p color
end

{taguchi:200, fkoji:400}.each do |name, score|
  puts "#{name}: #{score}"
end
