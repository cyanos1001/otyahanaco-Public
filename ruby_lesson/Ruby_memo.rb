=begin

puts ""　　文字列を改行つきで表現
print ""   文字列を改行なしで実行
p          デバック用
ctrl+L　　 ターミナルをクリア
ctrl+C     ターミナルの実行を中断
name =     変数の定義
gets　     ユーザーの入力をうけとって返す（改行つき.文字列）
gets.to_i  ユーザーの整数値の入力を受け取って返す
.chomp     改行を除去
if         条件分岐
else　　　 そのまま
end　　　　条件分岐おわり
elsif     さらに条件分岐
==         等しいとき
rand(値)　ランダムで値の数字を返す
#{変数｝  変数を表示させる
loop do   繰り返し処理
break     繰り返し抜ける
&&        かつ
||        または
length    要素の文字数を返してくれる
revase    要素を逆転させる



【メソッド】
◆String class◆
"helooworld".length   文字数を返す
"helooworld".revase　 文字列を逆順にしたものを返す
.upcace     文字列を大文字にして返す
.upcace!    文字列を大文字にして、元の変数の要素も大文字に書き換える
?         真偽値

◆Float Class◆
1.1.round  四捨五入
1.1.floor  切り捨て
1.1 ceil   切り上げ

変数.empty?    変数に要素がふくまれているかを真偽値で返す
変数.include?　変数に特定の文字が含まれているかを真偽値で返す

◆配列◆

colors = ["red", "blue", "yellow"]
colors[0]      要素の０番目の値
colors[-1]     一番末の要素を返す
colors[0..2]   0~2番目の要素
colors[0...2]  0~2の直前まで
colors[5]  # nil   なにも無いときなどに返ってくる
ー要素の書き換え
colors[0] = "pink"   指定した位置の要素を書き換える
colors[1..2] = ["white", "black"]  指定した範囲の要素をまとめて書き換える
colors.push("gold")  要素の末尾に新たな要素を追加する
colors << "silver"   要素の末尾に新たな要素を追加する（簡略文）
colors.size          要素の数を示す
colors.sort          並び替え

◆ハッシュ◆
 key(名前）＝taguchi,fkoji  value=結びつける値
scores = {"tagchi" => 200, "fkoji" => 400}  要素同士を結び付ける
scores = {:taguchi => 200, :fkoji => 400}   シンボルをつかったハッシュ
scores = {taguchi: 200, fkoji: 400}         シンボルを使ったハッシュの簡略

scores[taguchi]    キーに割り当てた値を返す
scores[fkoji] = 600 キーに割り当てた値を上書きする
scorws.size     要素の数を返す
scores.keys     キーの一覧
scores.values   値の一覧
scores.has_key?（：キー名） キーの有無を返す

◆オブジェクトの変換◆
x = 50
y = "30"

x + y =        Yが文字列なのでエラーになる
x + y.to_i =   整数値に変換してくれる
x + y.to_f =   不動小数点数
x.to_s + y =   数値を文字列とする

scores = {taguchi: 200, fkoji: 400}
scores.to_a   キーと値が配列になった配列になる
scores.to_h   配列になったものをハッシュに戻す

記法
%(hello)  "heloo" と同じ意味合い
%W(red blue)    ["red", "blue"]と同じ意味合い
%w(red blue)    ['red', 'blue']と同じ意味合い

◆書式付きで文字列に値を埋め込む◆
"文字列" % 値
%s   文字列
%d   整数
%f   浮動小数点数
ー文字列
”name: %s" % "taguchi"    "name: taguchi" と出力される
"name: %10s" % "taguchi"   "name:          taguchi"と出力される
"name: %-10s" % "taguchi"  "name:taguchi           "と出力される
ー数値
"id: %05d, rate: %10.2f" % [355, 3.284]
idは整数で5桁。満たない場合は0で埋めて表示
rete 小数点の前に前に10桁、小数点以下2桁で表示 
printf    書式文字列で表示
sprintf   書式文字列を表示させずに、文字列で返す


case signal
when "red"
 puts "stop!"
when "green"
  puts "Go!"
when "yellow"
  puts "caution!"
else
  puts "wrong signal"

=end