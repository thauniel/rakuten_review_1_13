'use client'

import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'
// import Image from "next/image"
import oto_p_review from './oto_ear_sort_with_refe_p.json'
import oto_n_review from './oto_ear_sort_with_refe_n.json'
import onnshitsu_p_review from './onnshitsu_ear_sort_with_refe_p.json'
import onnshitsu_n_review from './onnshitsu_ear_sort_with_refe_n.json'
import nedann_p_review from './nedann_ear_sort_with_refe_p.json'
import nedann_n_review from './nedann_ear_sort_with_refe_n.json'
import setsuzoku_p_review from './setsuzoku_ear_sort_with_refe_p.json'
import setsuzoku_n_review from './setsuzoku_ear_sort_with_refe_n.json'
import jyunndenn_p_review from './jyunndenn_ear_sort_with_refe_p.json'
import jyunndenn_n_review from './jyunndenn_ear_sort_with_refe_n.json'
import tsukai_p_review from './tsukai_ear_sort_with_refe_p.json'
import tsukai_n_review from './tsukai_ear_sort_with_refe_n.json'
import seinou_p_review from './seinou_ear_sort_with_refe_p.json'
import seinou_n_review from './seinou_ear_sort_with_refe_n.json'
import tsuwa_p_review from './tsuwa_ear_sort_with_refe_p.json'
import tsuwa_n_review from './tsuwa_ear_sort_with_refe_n.json'
import misuto_p_review from './misuto_p.json'
import misuto_n_review from './misuto_n.json'
import oto_p_hum_review from './oto_p.json'
import oto_n_hum_review from './oto_n.json'
import kashitsu_p_review from './kashitsu_p.json'
import kashitsu_n_review from './kashitsu_n.json'
import kannsou_p_review from './kannsou_p.json'
import kannsou_n_review from './kannsou_n.json'
import shinnshitsu_p_review from './shinnshitsu_p.json'
import shinnshitsu_n_review from './shinnshitsu_n.json'
import joki_p_review from './joki_p.json'
import joki_n_review from './joki_n.json'
import nedann_humidifier_p_review from './nedann_p.json'
import nedann_humidifier_n_review from './nedann_n.json'
import shiyou_p_review from './shiyou_p.json'
import shiyou_n_review from './shiyou_n.json'
import less_review_p_oto_earphone from './96_less_oto_ear_sort_with_refe_p.json'
import less_review_n_oto_earphone from './96_less_oto_ear_sort_with_refe_n.json'
import less_review_p_onnshitsu_earphone from './96_less_onnshitsu_ear_sort_with_refe_p.json'
import less_review_n_onnshitsu_earphone from './96_less_onnshitsu_ear_sort_with_refe_n.json'
import less_review_p_nedann_earphone from './96_less_nedann_ear_sort_with_refe_p.json'
import less_review_n_nedann_earphone from './96_less_nedann_ear_sort_with_refe_n.json'
import less_review_p_saizu_earphone from './96_less_saizu_ear_sort_with_refe_p.json'
import less_review_n_saizu_earphone from './96_less_saizu_ear_sort_with_refe_n.json'
import less_review_p_kyusui_humidifier from './10016923_kyusui_ear_sort_with_refe_p.json'
import less_review_n_kyusui_humidifier from './10016923_kyusui_ear_sort_with_refe_n.json'
import less_review_p_heya_humidifier from './10016923_heya_ear_sort_with_refe_p.json'
import less_review_n_heya_humidifier from './10016923_heya_ear_sort_with_refe_n.json'
import less_review_p_nedann_humidifier from './10016923_nedann_ear_sort_with_refe_p.json'
import less_review_n_nedann_humidifier from './10016923_nedann_ear_sort_with_refe_n.json'
import less_review_p_teire_humidifier from './10016923_teire_ear_sort_with_refe_p.json'
import less_review_n_teire_humidifier from './10016923_teire_ear_sort_with_refe_n.json'
import ricecooker_review_p_okome from './10607095_okome_ear_sort_with_refe_p.json'
import ricecooker_review_n_okome from './10607095_okome_ear_sort_with_refe_n.json'
import ricecooker_review_p_iro from './10607095_iro_ear_sort_with_refe_p.json'
import ricecooker_review_n_iro from './10607095_iro_ear_sort_with_refe_n.json'
import ricecooker_review_p_kichi from './10607095_kichi_ear_sort_with_refe_p.json'
import ricecooker_review_n_kichi from './10607095_kichi_ear_sort_with_refe_n.json'
import ricecooker_review_p_aji from './10607095_aji_ear_sort_with_refe_p.json'
import ricecooker_review_n_aji from './10607095_aji_ear_sort_with_refe_n.json'
import ricecooker_review_p_futa from './10607095_futa_ear_sort_with_refe_p.json'
import ricecooker_review_n_futa from './10607095_futa_ear_sort_with_refe_n.json'
import ricecooker_review_p_kama from './10607095_kama_ear_sort_with_refe_p.json'
import ricecooker_review_n_kama from './10607095_kama_ear_sort_with_refe_n.json'
import ricecooker_review_p_nedann from './10607095_nedann_ear_sort_with_refe_p.json'
import ricecooker_review_n_nedann from './10607095_nedann_ear_sort_with_refe_n.json'
import ricecooker_review_p_taki from './10607095_taki_ear_sort_with_refe_p.json'
import ricecooker_review_n_taki from './10607095_taki_ear_sort_with_refe_n.json'
import lr_review_p_okome from './10053485_okome_ear_sort_with_refe_p.json'
import lr_review_n_okome from './10053485_okome_ear_sort_with_refe_n.json'
import lr_review_p_kama from './10053485_kama_ear_sort_with_refe_p.json'
import lr_review_n_kama from './10053485_kama_ear_sort_with_refe_n.json'
import lr_review_p_nedann from './10053485_nedann_ear_sort_with_refe_p.json'
import lr_review_n_nedann from './10053485_nedann_ear_sort_with_refe_n.json'
import lr_review_p_kaikae from './10053485_kaikae_ear_sort_with_refe_p.json'
import lr_review_n_kaikae from './10053485_kaikae_ear_sort_with_refe_n.json'
import pf_review_p_kaori from './10000002_kaori_ear_sort_with_refe_p.json'
import pf_review_n_kaori from './10000002_kaori_ear_sort_with_refe_n.json'
import pf_review_p_kousui from './10000002_kousui_ear_sort_with_refe_p.json'
import pf_review_n_kousui from './10000002_kousui_ear_sort_with_refe_n.json'
import pf_review_p_ryuu from './10000002_ryuu_ear_sort_with_refe_p.json'
import pf_review_n_ryuu from './10000002_ryuu_ear_sort_with_refe_n.json'
import pf_review_p_nioi from './10000002_nioi_ear_sort_with_refe_p.json'
import pf_review_n_nioi from './10000002_nioi_ear_sort_with_refe_n.json'
import pf_review_p_konomi from './10000002_konomi_ear_sort_with_refe_p.json'
import pf_review_n_konomi from './10000002_konomi_ear_sort_with_refe_n.json'
import pf_review_p_yuuki from './10000002_yuuki_ear_sort_with_refe_p.json'
import pf_review_n_yuuki from './10000002_yuuki_ear_sort_with_refe_n.json'
import pf_review_p_kakaku from './10000002_kakaku_ear_sort_with_refe_p.json'
import pf_review_n_kakaku from './10000002_kakaku_ear_sort_with_refe_n.json'
import pf_review_p_botoru from './10000002_botoru_ear_sort_with_refe_p.json'
import pf_review_n_botoru from './10000002_botoru_ear_sort_with_refe_n.json'
import lpf_review_p_kaori from "./10003357_kaori_ear_sort_with_refe_p.json"
import lpf_review_n_kaori from "./10003357_kaori_ear_sort_with_refe_n.json"
import lpf_review_p_kousui from "./10003357_kousui_ear_sort_with_refe_p.json"
import lpf_review_n_kousui from "./10003357_kousui_ear_sort_with_refe_n.json"
import lpf_review_p_ryu from "./10003357_ryuu_ear_sort_with_refe_p.json"
import lpf_review_n_ryu from "./10003357_ryuu_ear_sort_with_refe_n.json"
import lpf_Review_p_nedann from "./10003357_nedann_ear_sort_with_refe_p.json"
import lpf_Review_n_nedann from "./10003357_nedann_ear_sort_with_refe_n.json"
import va_souji_p_review from "./10000006_souji_vacuum_sort_with_refe_p.json"
import va_souji_n_review from "./10000006_souji_vacuum_sort_with_refe_n.json"
import va_oto_p_review from "./10000006_oto_vacuum_sort_with_refe_p.json"
import va_oto_n_review from "./10000006_oto_vacuum_sort_with_refe_n.json"
import va_gomi_p_review from "./10000006_gomi_vacuum_sort_with_refe_p.json"
import va_gomi_n_review from "./10000006_gomi_vacuum_sort_with_refe_n.json"
import va_jyudenn_p_review from "./10000006_jyudenn_vacuum_sort_with_refe_p.json"
import va_jyudenn_n_review from "./10000006_jyudenn_vacuum_sort_with_refe_n.json"
import va_ke_p_review from "./10000006_ke_vacuum_sort_with_refe_p.json"
import va_ke_n_review from "./10000006_ke_vacuum_sort_with_refe_n.json"
import va_nedann_p_review from "./10000006_nedann_vacuum_sort_with_refe_p.json"
import va_nedann_n_review from "./10000006_nedann_vacuum_sort_with_refe_n.json"
import va_heya_p_review from "./10000006_heya_vacuum_sort_with_refe_p.json"
import va_heya_n_review from "./10000006_heya_vacuum_sort_with_refe_n.json"
import va_tsukai_p_review from "./10000006_tsukai_vacuum_sort_with_refe_p.json"
import va_tsukai_n_review from "./10000006_tsukai_vacuum_sort_with_refe_n.json"
import sva_souji_p_review from "./10007118_souji_vacuum_sort_with_refe_p.json"
import sva_souji_n_review from "./10007118_souji_vacuum_sort_with_refe_n.json"
import sva_jyudenn_p_review from "./10007118_jyudenn_vacuum_sort_with_refe_p.json"
import sva_jyudenn_n_review from "./10007118_jyudenn_vacuum_sort_with_refe_n.json"
import sva_tsukai_p_review from "./10007118_tsukai_vacuum_sort_with_refe_p.json"
import sva_tsukai_n_review from "./10007118_tsukai_vacuum_sort_with_refe_n.json"
import sva_nedann_p_review from "./10007118_nedann_vacuum_sort_with_refe_p.json"
import sva_nedann_n_review from "./10007118_nedann_vacuum_sort_with_refe_n.json"
// import Modal from "react-modal"


const categories = ["掃除機"] as const;
const products = {
  // "イヤホン": ["QCY-T1C完全ワイヤレスイヤホン第3/4世代"],
  // "イヤホン": ["QCY-T1C完全ワイヤレスイヤホン第3/4世代","AAC進化版ワイヤレスイヤホン"],
  // "加湿器": ["小型加湿器S08","エルズ ヒュミディファイアー"],
  "炊飯器":["TIGERJPCA101RC炊飯器","NPVI10TA炊飯器"],
  "香水":["レディースイヴサンローラン香水","定番 モテ香水"],
  "掃除機":["UENOシンプル掃除機","マキタCL107FDSHW掃除機"]
} as const;

const reviews = {
  "UENOシンプル掃除機":{
    positive:"この掃除機は、軽量で使いやすく、日常的な掃除に非常に便利です。狭い範囲の掃除には特に効果的で、大きなゴミや猫砂、細かいゴミも問題なく吸引します。吸引力は驚くほど強力で、猫の毛や布団、カーペットに付着したゴミをきれいに取り除きます。また、音も許容範囲内で静かであり、充電のしやすさも使い勝手を向上させています。コードレスなので、気になる時にサッと取り出して、すぐに掃除を始められるのが大きな魅力です。以前使用していた高価格の掃除機よりも簡単で効率的であり、掃除が楽しくなるほどです。色合いもきれいで、部屋に置いてもインテリアの一部として違和感なく馴染みます。子供の食べこぼしやちょっとした掃除にも毎日使えるので、掃除のストレスが大きく軽減されました。",
    negative:"このハンディコードレスクリーナーは、車の掃除や子供の食べこぼしには便利ですが、いくつかの問題があります。ブラシノズルなしで掃除したため、効果が発揮されなかったり、ダストカップの吸い込み口にゴミが詰まりやすいです。音はダイソンより静かですが、充電時にランプが不安定になったり、塗装が剥がれることもあります。吸引力が弱く、犬の毛の掃除には苦労し、コロコロの方が効果的でした。サイズと価格は決め手でしたが、品質に不満が残ります。"
  },
  "マキタCL107FDSHW掃除機":{
    positive:"このコードレス掃除機は、音がうるさいという指摘がある一方で、従来使用していたダイソン風のサイクロン式掃除機よりも音が静かで、気になりません。特に、先端にライトがついており、暗い場所でも掃除がしやすく、便利です。愛犬（柴犬）の毛を毎日掃除する必要があり、コードレスなので非常に楽に掃除ができて満足しています。吸引力は現状十分ですが、やや弱いと感じる点があるため、星1つ減点しています。ただし、大きなゴミは出ず、フローリング用ウェットシートを併用することで、問題なく掃除ができます。別売りのバッテリーは軽く、重さが増すことなく、充電も速いため非常に使い勝手が良いです。軽量で取り回しも楽で、価格も手頃で、日常的な掃除をサッと行えるため重宝しています。",
    negative:"このマキタの掃除機は、軽さと充電時間の速さが魅力で購入されたようですが、いくつかの問題がありました。以前使用していた重い掃除機は吸引力が強すぎて使い勝手が悪く、充電時間も長くて不便でしたが、マキタは軽さと充電時間の短さが決め手となりました。しかし、オプションのサイクロンを付けると重くなり、吸引力が落ちるため、使わなくなったようです。また、ノズルが外れやすく、音がうるさい割には吸引力が弱いと感じており、価格が同じでも他のモデルとの違いに不満が残っています。"
  },
  "QCY-T1C完全ワイヤレスイヤホン第3/4世代": {
    positive: "このイヤホンは値段以上のパフォーマンスを提供しており、音質も非常に良いと感じています。接続は簡単で、毎日通学に使用しています。充電の持ちも良いため、長時間の使用にも問題ありません。ハイテクな機能が豊富で、使い勝手が良いです。価格を考えると性能は十分で、通話も問題なくできます。ケースから外してすぐにBluetooth接続できる点も便利で、総合的に満足しています。おすすめの一品です。",
    negative: "購入3ヶ月で片方のイヤホンが壊れ、完全に音が出なくなりました。接続自体は容易ですが、相手への音質が悪く、「え？なに？」と聞かれることがあります。当初は快適だったものの、1ヶ月も経たずに左耳の接続が不安定になり、充電時間も1時間程度しか持たない状態になりました。対処方法を試しても改善せず、最大2-3時間しか使用できませんでした。また、充電器にセットしてもフル充電にならず、残量は20-30%のままでした。初期不良により商品交換は迅速に行われましたが、価格相応の扱いやすさと使い勝手が良かった点を除けば、磁力が強すぎて外れやすいという問題も存在します。音楽の音質は良いですが、通話品質はまあまあのレベルです。"
  },
  "小型加湿器S08": {
    positive: "注文翌日に商品が届き、迅速な対応に満足しています。ミストの量が多く、ひんやりとした感触で気持ち良いです。ペットボトル用加湿器と比較して音も静かで、加湿量も多いので、寝室での使用にも適しています。価格もお手頃で、一人暮らしや部屋での使用には最適な商品です。ミストは細かく、加湿効果もしっかりとしており、コンパクトでフォルムも可愛らしいデザインが魅力です。ただし、狭い部屋や車内では問題ないものの、大きな空間での加湿効果については少し微妙かもしれません。全体的に満足度が高く、乾燥対策に役立つ商品だと感じています。",
    negative: "室内での使用時には問題が生じました。使い始めて数回でミストが出なくなり、対応策を試みても数分間ボタンを押し続ける必要がありました。また、加湿力は弱く、勢いも微弱です。小型で軽量なため移動が楽ですが、値段相応の品質であり、長期的な使用に耐えられるか不安があります。故障せずに数年使えることを期待していますが、現状では使い捨て感が否めません。"
  },
  "AAC進化版ワイヤレスイヤホン": {
    positive: "このイヤホンの音質は非常にクリアで、細かい音もしっかりと聞こえます。音がこもらず、全体的に高品質なサウンドを提供しています。価格もリーズナブルで、使い勝手が良い点も高く評価できます。",
    negative: "このイヤホンは家での使用には適しており、音質も値段を考えると十分満足できるレベルです。しかし、歩行やランニング中に外の音が聞こえにくいという問題があり、安全面で不安があります。また、サイズ展開はS・M・Lとありますが、本体自体の大きさも考慮する必要があることが分かりました。"
  },
  "エルズ ヒュミディファイアー": {
    positive: "この加湿器はお手入れが簡単で、給水も上部から簡単にできる設計になっています。デザインはシンプルで、部屋のインテリアにすんなりと馴染みます。使い勝手が良く、日常的なメンテナンスも負担にならない点が高く評価されています。",
    negative: "この加湿器はシンプルでインテリアに馴染むデザインであり、水タンクもたっぷり入ります。しかし、使用開始直後に給水ができず、タンクを持ち上げると本体から大量の水が漏れ出し、床が水浸しになるという問題が発生しました。"
  },
  "TIGERJPCA101RC炊飯器": {
    positive: "この炊飯器の主な特徴としては、エコ炊き、極うま炊き、おこわ、炊き込み、玄米、早炊きなどのコースが充実しており、特に雑穀米の調理に優れています。デザイン面でも評価されており、カーマインレッドの色合いはキッチンを明るくし、気分を上げます。内釜には持ち手が付いており、使い勝手も良好です。新しい炊飯ジャーで炊いた米は少し柔らかく、ツヤがあり甘みがあります。保温機能を活用すると、以前のものと同様の品質を維持できるようです。また、炊き込みご飯のコースではおこげができる設定があり、楽しみにしています。内釜は重すぎず、洗いやすさも評価されています。価格面でも大満足で、予想以上に安かったとのこと。",
    negative: "蓋が少し閉まりにくく力が要ります"
  },
  "NPVI10TA炊飯器": {
    positive: "前の炊飯器と比べて、同じお米でも新しい炊飯器でより美味しく炊けるようになった。釜が軽くサッと洗えるため、お手入れが簡単。さらに、値段も安くてコストパフォーマンスが高い。",
    negative: "None"
  },
  "定番 モテ香水": {
    positive: "人気ランキング1位の香水を購入し、その香りが「街でたまに遭遇する、いい香りのお姉さん」の香りと一致することから非常に満足。甘すぎずスパイシーすぎない落ち着きのある香りで、量が多く、価格もリーズナブルとの評価です。",
    negative: "長年愛用している香水を購入したが、香りが期待通りではなく不満足。ほのかに本来の良い香りを感じたものの、ハズレ商品だった。"
  },
  "レディースイヴサンローラン香水": {
    positive: "複数の香水サンプルセットを購入し、Diorの2本が不具合があったものの、BVLGARIアメジストは無事で毎日使用。エクラ、クロエ、ホワイトフローラルなども全て良い香りで満足。気分転換に丁度よく、自分の好きな匂いを見つけることができた。お店の対応も迅速で、容器もしっかりしているため、リピート購入を検討。内容と価格にも満足しており、また利用したいと考えている。",
    negative: "3本入りの香水サンプルセットを購入したが、1本が香りが飛んでアルコール臭く、ジップ袋の中で漏れてベチャベチャになった。少量サイズであったため少し漏れるだけで残念な気持ちに。ショップは休業日にもかかわらず迅速に対応してくれたが、量の少なさや蓋がないことによる漏れ、匂いの移りなどから評価を4つ星に変更。お試しセットの量の少なさと容器の区別がつきにくさも残念だった。"
  }
}

// const images ={
//   "QCY-T1C完全ワイヤレスイヤホン第3/4世代": 
//   [
//    require("./product_image/rakuten_earphone_1.jpg"),
//    require("./product_image/rakuten_earphone_2.jpg"),
//    require("./product_image/rakuten_earphone_3.jpg"),
//   ],
// };

export function ProductReviewsComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [selectedAspect, setselectedAspect]=useState<string| undefined>(undefined);
  const [showDetails,setShowDetails]=useState(false);
  const [PositiveData,setPositiveData]=useState<string[]>([]);
  const [PositiveReferences,setPositiveReference]=useState<number[]>([]);
  const [NegativeData,setNegativeData]=useState<string[]>([]);
  const [NegativeReferences,setNegativeReference]=useState<number[]>([]);
  const [ClickReceive,setClickReceive]=useState(false);
  const [PReviews,setPositiveReviews]=useState<string[]>([]);
  const [NReviews,setNegativeReviews]=useState<string[]>([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');

  const [expandedIndices, setExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});
  const [expandedRightIndices, setRightExpandedIndices] = useState<Record<string, Record<number, boolean>>>({});

  const toggleExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };
  const toggleRightExpand = (aspect: string | undefined, index: number) => {
    if (!aspect) return; // 如果 aspect 未定义，直接返回
    setRightExpandedIndices((prev) => ({
      ...prev,
      [aspect]: {
        ...prev[aspect],
        [index]: !prev[aspect]?.[index], // 切换指定观点和索引的状态
      },
    }));
  };


  useEffect(() => {
    if (selectedCategory) {
      setSelectedProduct(products[selectedCategory as keyof typeof products][0]); // Type assertion
    }
  }, [selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setShowDetails(false);
    setClickReceive(false);
  };


  // const openModal = (image:string) => {
  //   setSelectedImage(image);
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  //   setSelectedImage('');
  // };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    setShowDetails(false);
    setClickReceive(false);
  };
  
  const buttonClick=(value:string,isDetailVisible: boolean)=>{
    setselectedAspect(value);
    setClickReceive(isDetailVisible)
  };
  const handleShowDetails=(isDetailVisible: boolean)=>{
    setShowDetails(isDetailVisible)
    setselectedAspect(undefined)
  }
  const handleReviewshow =(reviews:string[],references:number[],reviews2:string[],references2:number[])=>{
    setPositiveData(reviews);
    setPositiveReference(references);
    setNegativeData(reviews2);
    setNegativeReference(references2);
  }
  const Reviews=(Previews:string[],Nreviews:string[])=>{
    setPositiveReviews(Previews)
    setNegativeReviews(Nreviews)
  }
 


  const calculateKength=(Reviews:string[])=>{
    return Reviews.length
  }

  const renderReviewWithRedHighlight = (review:string) => {
    const sentences = review.split(/(?<=。)/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-red-500 text-white":""}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };
 
  const renderReviewWithBlueHighlight = (review:string) => {
    const sentences = review.split(/(?<=。)/);
    return (
      <div>
        {sentences.map((sentence, index) => (
            <span key={index} className={selectedAspect && sentence.includes(selectedAspect) ? "bg-blue-500 text-white" : ''}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };


  const showReviewWithclickaspect = (review: string) => {
    const sentences = review.split(/(?<=。)/);
    const filteredSentences = sentences.filter(sentence => 
      selectedAspect && sentence.includes(selectedAspect)
    );
  
    return (
      <div>
        {filteredSentences.map((sentence, index) => (
          <span key={index}>
            {sentence}{' '}
          </span>
        ))}
      </div>
    );
  };



  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <Select onValueChange={handleCategoryChange} value={selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="商品ジャンル" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={handleProductChange} value={selectedProduct} disabled={!selectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="商品名" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory && products[selectedCategory as keyof typeof products].map((product) => (
                <SelectItem key={product} value={product}>
                  {product}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        

    <div> 
        {/* <div className='flex justify-center items-center mb-4'>
            {selectedProduct === "QCY-T1C完全ワイヤレスイヤホン第3/4世代" && images[selectedProduct]?.map((image, index) => (
            <Image 
            key={index} 
            src={image} 
            alt={`Product Image ${index + 1}`}
            className="w-48 h-48 object-cover cursor-pointer" 
            onClick={()=>openModal(image)}/>
            
          ))}
       </div> */}

       {/* <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
        <Image src={selectedImage} alt="Selected Product" className="max-w-[50%] max-h-[50%]" style={{width:'50%',height:'50%'}}/>
        <button onClick={closeModal} className='absolute top-4 right-4 text-white bg-gray-800 rounded p-2'>
          Close
        </button>
      </Modal> */}
    </div>

     

        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="mr-2 text-red-500" />
                  ポジティブなレビュー要約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.positive || "No positive review available."}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsDown className="mr-2 text-blue-500" />
                  ネガティブレビュー要約
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{reviews[selectedProduct as keyof typeof reviews]?.negative || "No negative review available."}</p>
              </CardContent>
            </Card>
          </div>
        )}
        
          {selectedProduct && (
          <div className="text-center">
            <Button size="lg" onClick={()=>handleShowDetails(true)}>もっと見る</Button>
        </div>
        )}
        <div className="my-4"></div>

        <div className="flex justify-center space-x-4 mb-1">
          {showDetails&&selectedProduct === "QCY-T1C完全ワイヤレスイヤホン第3/4世代"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title='positive:292 negative:62'
               onClick={()=>{
               buttonClick("音",true)
               Reviews(oto_p_review.reviews,oto_n_review.reviews)
               handleReviewshow(oto_p_review.reviews,oto_p_review.reference,oto_n_review.reviews,oto_n_review.reference)  
              }
               }
              >
                音
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:315 negative:15'
              onClick={() => {
                buttonClick("音質",true)
                Reviews(onnshitsu_p_review.reviews,onnshitsu_n_review.reviews)
                handleReviewshow(onnshitsu_p_review.reviews,onnshitsu_p_review.reference,onnshitsu_n_review.reviews,onnshitsu_n_review.reference)
              }}>
              音質
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:173 negative:8'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(nedann_p_review.reviews,nedann_n_review.reviews)
                handleReviewshow(nedann_p_review.reviews,nedann_p_review.reference,nedann_n_review.reviews,nedann_n_review.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:91 negative:15'
              onClick={() => {
                buttonClick("接続",true)
                Reviews(setsuzoku_p_review.reviews,setsuzoku_n_review.reviews)
                handleReviewshow(setsuzoku_p_review.reviews,setsuzoku_p_review.reference,setsuzoku_n_review.reviews,setsuzoku_n_review.reference)
              }}>
              接続
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:51 negative:0'
              onClick={() => {
                buttonClick("使い勝手",true)
                Reviews(tsukai_p_review.reviews,tsukai_n_review.reviews)
                handleReviewshow(tsukai_p_review.reviews,tsukai_p_review.reference,tsukai_n_review.reviews,tsukai_n_review.reference)
              }}>
              使い勝手
            </button>

            <button
              className="rounded-full py-2 px-4 bg-blue-500  text-white" 
              title='positive:22 negative:0'
              onClick={() => {
                buttonClick("性能",true)
                Reviews(seinou_p_review.reviews,seinou_n_review.reviews)
                handleReviewshow(seinou_p_review.reviews,seinou_p_review.reference,seinou_n_review.reviews,seinou_n_review.reference)
              }}>
              性能
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while" 
              title='positive:38 negative:28'
              onClick={() => {
                buttonClick("充電",true)
                Reviews(jyunndenn_p_review.reviews,jyunndenn_n_review.reviews)
                handleReviewshow(jyunndenn_p_review.reviews,jyunndenn_p_review.reference,jyunndenn_n_review.reviews,jyunndenn_n_review.reference)
              }}>
              充電
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while " 
               title='positive:11 negative:8'
              onClick={() => {
                buttonClick("通話",true)
                Reviews(tsuwa_p_review.reviews,tsuwa_n_review.reviews)
                handleReviewshow(tsuwa_p_review.reviews,tsuwa_p_review.reference,tsuwa_n_review.reviews,tsuwa_n_review.reference)
              }}>
              通話
            </button>
            </div> )}

            {showDetails&&selectedProduct === "小型加湿器S08"&& (
              <div className='flex flex-wrap justify-center'>

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:118 negative:14"
                onClick={()=>{
                buttonClick("ミスト",true)
                Reviews(misuto_p_review.reviews,misuto_n_review.reviews)
                handleReviewshow(misuto_p_review.reviews,misuto_p_review.reference,misuto_n_review.reviews,misuto_n_review.reference)  
                }
                }
                >
                  ミスト
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:102 negative:15"
                onClick={()=>{
                buttonClick("音",true)
                Reviews(oto_p_hum_review.reviews,oto_n_hum_review.reviews)
                handleReviewshow(oto_p_hum_review.reviews,oto_p_hum_review.reference,oto_n_hum_review.reviews,oto_n_hum_review.reference)  
                }
                }
                >
                  音
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:37 negative:1"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(nedann_humidifier_p_review.reviews,nedann_humidifier_n_review.reviews)
                handleReviewshow(nedann_humidifier_p_review.reviews,nedann_humidifier_p_review.reference,nedann_humidifier_n_review.reviews,nedann_humidifier_n_review.reference)  
                }
                }
                >
                  値段
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:34 negative:4"
                onClick={()=>{
                buttonClick("加湿",true)
                Reviews(kashitsu_p_review.reviews,kashitsu_n_review.reviews)
                handleReviewshow(kashitsu_p_review.reviews,kashitsu_p_review.reference,kashitsu_n_review.reviews,kashitsu_n_review.reference)  
                }
                }
                >
                  加湿
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:19 negative:7"
                onClick={()=>{
                buttonClick("蒸気",true)
                Reviews(joki_p_review.reviews,joki_n_review.reviews)
                handleReviewshow(joki_p_review.reviews,joki_p_review.reference,joki_n_review.reviews,joki_n_review.reference)  
                }
                }
                >
                   蒸気
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:6 negative:2"
                onClick={()=>{
                buttonClick("使用",true)
                Reviews(shiyou_p_review.reviews,shiyou_n_review.reviews)
                handleReviewshow(shiyou_p_review.reviews,shiyou_p_review.reference,shiyou_n_review.reviews,shiyou_n_review.reference)  
                }
                }
                >
                    使用
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:6 negative:0"
                onClick={()=>{
                buttonClick("寝室",true)
                Reviews(shinnshitsu_p_review.reviews,shinnshitsu_n_review.reviews)
                handleReviewshow(shinnshitsu_p_review.reviews,shinnshitsu_p_review.reference,shinnshitsu_n_review.reviews,shinnshitsu_n_review.reference)  
                }
                }
                >
                   寝室
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:20 negative:6"
                onClick={()=>{
                buttonClick("乾燥",true)
                Reviews(kannsou_p_review.reviews,kannsou_n_review.reviews)
                handleReviewshow(kannsou_p_review.reviews,kannsou_p_review.reference,kannsou_n_review.reviews,kannsou_n_review.reference)  
                }
                }
                >
                     乾燥
                </button>

              
              </div>)}
            {showDetails&&selectedProduct === "AAC進化版ワイヤレスイヤホン"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:21 negative:4"
               onClick={()=>{
               buttonClick("音",true)
               Reviews(less_review_p_oto_earphone.reviews,less_review_n_oto_earphone.reviews)
               handleReviewshow(less_review_p_oto_earphone.reviews,less_review_p_oto_earphone.reference,less_review_n_oto_earphone.reviews,less_review_n_oto_earphone.reference)  
              }
               }
              >
                音
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:24 negative:0'
              onClick={() => {
                buttonClick("音質",true)
                Reviews(less_review_p_onnshitsu_earphone.reviews,less_review_n_onnshitsu_earphone.reviews)
                handleReviewshow(less_review_p_onnshitsu_earphone.reviews,less_review_p_onnshitsu_earphone.reference,less_review_n_onnshitsu_earphone.reviews,less_review_n_onnshitsu_earphone.reference)
              }}>
              音質
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:10 negative:0'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(less_review_p_nedann_earphone.reviews,less_review_n_nedann_earphone.reviews)
                handleReviewshow(less_review_p_nedann_earphone.reviews,less_review_p_nedann_earphone.reference,less_review_n_nedann_earphone.reviews,less_review_n_nedann_earphone.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 bg-blue-500  text-white" 
              title='positive:0 negative:2'
              onClick={() => {
                buttonClick("サイズ",true)
                Reviews(less_review_p_saizu_earphone.reviews,less_review_n_saizu_earphone.reviews)
                handleReviewshow(less_review_p_saizu_earphone.reviews,less_review_p_saizu_earphone.reference,less_review_n_saizu_earphone.reviews,less_review_n_saizu_earphone.reference)
              }}>
              サイズ
            </button>
            </div>)}
            {showDetails&&selectedProduct === "エルズ ヒュミディファイアー"&& (
            <div className='flex flex-wrap justify-center'>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title="positive:19 negative:0"
               onClick={()=>{
               buttonClick("手入れ",true)
               Reviews(less_review_p_teire_humidifier.reviews,less_review_n_teire_humidifier.reviews)
               handleReviewshow(less_review_p_teire_humidifier.reviews,less_review_p_teire_humidifier.reference,less_review_n_teire_humidifier.reviews,less_review_n_teire_humidifier.reference)  
              }
               }
              >
              手入れ
              </button>

              
           <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:12 negative:1'
              onClick={() => {
                buttonClick("給水",true)
                Reviews(less_review_p_kyusui_humidifier.reviews,less_review_n_kyusui_humidifier.reviews)
                handleReviewshow(less_review_p_kyusui_humidifier.reviews,less_review_p_kyusui_humidifier.reference,less_review_n_kyusui_humidifier.reviews,less_review_n_kyusui_humidifier.reference)
              }}>
              給水
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:2 negative:0'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(less_review_p_nedann_humidifier.reviews,less_review_n_nedann_humidifier.reviews)
                handleReviewshow(less_review_p_nedann_humidifier.reviews,less_review_p_nedann_humidifier.reference,less_review_n_nedann_humidifier.reviews,less_review_n_nedann_humidifier.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 border bg-red-500 text-white" 
              title='positive:4 negative:0'
              onClick={() => {
                buttonClick("部屋",true)
                Reviews(less_review_p_heya_humidifier.reviews,less_review_n_heya_humidifier.reviews)
                handleReviewshow(less_review_p_heya_humidifier.reviews,less_review_p_heya_humidifier.reference,less_review_n_heya_humidifier.reviews,less_review_n_heya_humidifier.reference)
              }}>
              部屋
            </button>
            </div>)}

            {showDetails&&selectedProduct === "TIGERJPCA101RC炊飯器"&& (
              <div className='flex flex-wrap justify-center'>
                
                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:56 negative:0"
                onClick={()=>{
                buttonClick("色",true)
                Reviews(ricecooker_review_p_iro.reviews,ricecooker_review_n_iro.reviews)
                handleReviewshow(ricecooker_review_p_iro.reviews,ricecooker_review_p_iro.reference,ricecooker_review_n_iro.reviews,ricecooker_review_n_iro.reference)  
                }
                }
                >
                  色
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:37 negative:0"
                onClick={()=>{
                buttonClick("米",true)
                Reviews(ricecooker_review_p_okome.reviews,ricecooker_review_n_okome.reviews)
                handleReviewshow(ricecooker_review_p_okome.reviews,ricecooker_review_p_okome.reference,ricecooker_review_n_okome.reviews,ricecooker_review_n_okome.reference)  
                }
                }
                >
                  米
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:23 negative:0"
                onClick={()=>{
                buttonClick("キッチン",true)
                Reviews(ricecooker_review_p_kichi.reviews,ricecooker_review_n_kichi.reviews)
                handleReviewshow(ricecooker_review_p_kichi.reviews,ricecooker_review_p_kichi.reference,ricecooker_review_n_kichi.reviews,ricecooker_review_n_kichi.reference)  
                }
                }
                >
                  キッチン
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:12 negative:0"
                onClick={()=>{
                buttonClick("味",true)
                Reviews(ricecooker_review_p_aji.reviews,ricecooker_review_n_aji.reviews)
                handleReviewshow(ricecooker_review_p_aji.reviews,ricecooker_review_p_aji.reference,ricecooker_review_n_aji.reviews,ricecooker_review_n_aji.reference)  
                }
                }
                >
                  味
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:7 negative:0"
                onClick={()=>{
                buttonClick("釜",true)
                Reviews(ricecooker_review_p_kama.reviews,ricecooker_review_n_kama.reviews)
                handleReviewshow(ricecooker_review_p_kama.reviews,ricecooker_review_p_kama.reference,ricecooker_review_n_kama.reviews,ricecooker_review_n_kama.reference)  
                }
                }
                >
                    釜
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:9 negative:0"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(ricecooker_review_p_nedann.reviews,ricecooker_review_n_nedann.reviews)
                handleReviewshow(ricecooker_review_p_nedann.reviews,ricecooker_review_p_nedann.reference,ricecooker_review_n_nedann.reviews,ricecooker_review_n_nedann.reference)  
                }
                }
                >
                   値段
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:1 negative:0"
                onClick={()=>{
                buttonClick("炊き",true)
                Reviews(ricecooker_review_p_taki.reviews,ricecooker_review_n_taki.reviews)
                handleReviewshow(ricecooker_review_p_taki.reviews,ricecooker_review_p_taki.reference,ricecooker_review_n_taki.reviews,ricecooker_review_n_taki.reference)  
                }
                }
                >
                  炊き
                </button>

                <button
                className="rounded-full py-2 px-4 bg-blue-500 text-white"
                title="positive:0 negative:6"
                onClick={()=>{
                buttonClick("蓋",true)
                Reviews(ricecooker_review_p_futa.reviews,ricecooker_review_n_futa.reviews)
                handleReviewshow(ricecooker_review_p_futa.reviews,ricecooker_review_p_futa.reference,ricecooker_review_n_futa.reviews,ricecooker_review_n_futa.reference)  
                }
                }
                >
                   蓋
                </button>

              </div>)}
              {showDetails&&selectedProduct === "NPVI10TA炊飯器"&& (
              <div className='flex flex-wrap justify-center'>
                

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:6 negative:1"
                onClick={()=>{
                buttonClick("米",true)
                Reviews(lr_review_p_okome.reviews,lr_review_n_okome.reviews)
                handleReviewshow(lr_review_p_okome.reviews,lr_review_p_okome.reference,lr_review_n_okome.reviews,lr_review_n_okome.reference)  
                }
                }
                >
                  米
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:4 negative:1"
                onClick={()=>{
                buttonClick("釜",true)
                Reviews(lr_review_p_kama.reviews,lr_review_n_kama.reviews)
                handleReviewshow(lr_review_p_kama.reviews,lr_review_p_kama.reference,lr_review_n_kama.reviews,lr_review_n_kama.reference)  
                }
                }
                >
                    釜
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:4 negative:0"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(lr_review_p_nedann.reviews,lr_review_n_nedann.reviews)
                handleReviewshow(lr_review_p_nedann.reviews,lr_review_p_nedann.reference,lr_review_n_nedann.reviews,lr_review_n_nedann.reference)  
                }
                }
                >
                   値段
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:1 negative:0"
                onClick={()=>{
                buttonClick("買い換え",true)
                Reviews(lr_review_p_kaikae.reviews,lr_review_n_kaikae.reviews)
                handleReviewshow(lr_review_p_kaikae.reviews,lr_review_p_kaikae.reference,lr_review_n_kaikae.reviews,lr_review_n_kaikae.reference)  
                }
                }
                >
                  買い換え
                </button>

              </div>)}
              {showDetails&&selectedProduct === "レディースイヴサンローラン香水"&& (
              <div className='flex flex-wrap justify-center'>
                
                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:142 negative:20"
                onClick={()=>{
                buttonClick("香り",true)
                Reviews(pf_review_p_kaori.reviews,pf_review_n_kaori.reviews)
                handleReviewshow(pf_review_p_kaori.reviews,pf_review_p_kaori.reference,pf_review_n_kaori.reviews,pf_review_n_kaori.reference)  
                }
                }
                >
                  香り
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:51 negative:6"
                onClick={()=>{
                buttonClick("香水",true)
                Reviews(pf_review_p_kousui.reviews,pf_review_n_kousui.reviews)
                handleReviewshow(pf_review_p_kousui.reviews,pf_review_p_kousui.reference,pf_review_n_kousui.reviews,pf_review_n_kousui.reference)  
                }
                }
                >
                  香水
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:32 negative:2"
                onClick={()=>{
                buttonClick("量",true)
                Reviews(pf_review_p_ryuu.reviews,pf_review_n_ryuu.reviews)
                handleReviewshow(pf_review_p_ryuu.reviews,pf_review_p_ryuu.reference,pf_review_n_ryuu.reviews,pf_review_n_ryuu.reference)  
                }
                }
                >
                  量
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:26 negative:5"
                onClick={()=>{
                buttonClick("匂い",true)
                Reviews(pf_review_p_nioi.reviews,pf_review_n_nioi.reviews)
                handleReviewshow(pf_review_p_nioi.reviews,pf_review_p_nioi.reference,pf_review_n_nioi.reviews,pf_review_n_nioi.reference)  
                }
                }
                >
                  匂い
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:10 negative:0"
                onClick={()=>{
                buttonClick("価格",true)
                Reviews(pf_review_p_kakaku.reviews,pf_review_n_kakaku.reviews)
                handleReviewshow(pf_review_p_kakaku.reviews,pf_review_p_kakaku.reference,pf_review_n_kakaku.reviews,pf_review_n_kakaku.reference)  
                }
                }
                >
                  価格
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:6 negative:2"
                onClick={()=>{
                buttonClick("容器",true)
                Reviews(pf_review_p_yuuki.reviews,pf_review_n_yuuki.reviews)
                handleReviewshow(pf_review_p_yuuki.reviews,pf_review_p_yuuki.reference,pf_review_n_yuuki.reviews,pf_review_n_yuuki.reference)  
                }
                }
                >
                   容器
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:5 negative:0"
                onClick={()=>{
                buttonClick("ボトル",true)
                Reviews(pf_review_p_botoru.reviews,pf_review_n_botoru.reviews)
                handleReviewshow(pf_review_p_botoru.reviews,pf_review_p_botoru.reference,pf_review_n_botoru.reviews,pf_review_n_botoru.reference)  
                }
                }
                >
                   ボトル
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:4 negative:0"
                onClick={()=>{
                buttonClick("好み",true)
                Reviews(pf_review_p_konomi.reviews,pf_review_n_konomi.reviews)
                handleReviewshow(pf_review_p_konomi.reviews,pf_review_p_konomi.reference,pf_review_n_konomi.reviews,pf_review_n_konomi.reference)  
                }
                }
                >
                    好み
                </button>
              </div>)}

              {showDetails&&selectedProduct === "定番 モテ香水"&& (
              <div className='flex flex-wrap justify-center'>
                
                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:42 negative:5"
                onClick={()=>{
                buttonClick("香り",true)
                Reviews(lpf_review_p_kaori.reviews,lpf_review_n_kaori.reviews)
                handleReviewshow(lpf_review_p_kaori.reviews,lpf_review_p_kaori.reference,lpf_review_n_kaori.reviews,lpf_review_n_kaori.reference)  
                }
                }
                >
                  香り
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:5 negative:1"
                onClick={()=>{
                buttonClick("香水",true)
                Reviews(lpf_review_p_kousui.reviews,lpf_review_n_kousui.reviews)
                handleReviewshow(lpf_review_p_kousui.reviews,lpf_review_p_kousui.reference,lpf_review_n_kousui.reviews,lpf_review_n_kousui.reference)  
                }
                }
                >
                  香水
                </button>

                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:3 negative:0"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(lpf_Review_p_nedann.reviews,lpf_Review_n_nedann.reviews)
                handleReviewshow(lpf_Review_p_nedann.reviews,lpf_Review_p_nedann.reference,lpf_Review_n_nedann.reviews,lpf_Review_n_nedann.reference)  
                }
                }
                >
                  値段
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:1 negative:0"
                onClick={()=>{
                buttonClick("量",true)
                Reviews(lpf_review_p_ryu.reviews,lpf_review_n_ryu.reviews)
                handleReviewshow(lpf_review_p_ryu.reviews,lpf_review_p_ryu.reference,lpf_review_n_ryu.reviews,lpf_review_n_ryu.reference)  
                }
                }
                >
                  量
                </button>
              </div>)}
              {showDetails&&selectedProduct === "UENOシンプル掃除機"&& (
            <div className='flex flex-wrap justify-center'>

              <button
              className="rounded-full py-2 px-4 bg-red-500 text-white " 
              title='positive:126 negative:36'
              onClick={() => {
                buttonClick("音",true)
                Reviews(va_oto_p_review.reviews,va_oto_n_review.reviews)
                handleReviewshow(va_oto_p_review.reviews,va_oto_p_review.reference,va_oto_n_review.reviews,va_oto_n_review.reference)
              }}>
              音
            </button>
              <button
               className="rounded-full py-2 px-4 bg-red-500 text-white"
               title='positive:123 negative:7'
               onClick={()=>{
               buttonClick("掃除",true)
               Reviews(va_souji_p_review.reviews,va_souji_n_review.reviews)
               handleReviewshow(va_souji_p_review.reviews,va_souji_p_review.reference,va_souji_n_review.reviews,va_souji_n_review.reference)  
              }
               }
              >
                掃除
              </button>

              <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:62 negative:6'
              onClick={() => {
                buttonClick("値段",true)
                Reviews(va_nedann_p_review.reviews,va_nedann_n_review.reviews)
                handleReviewshow(va_nedann_p_review.reviews,va_nedann_p_review.reference,va_nedann_n_review.reviews,va_nedann_n_review.reference)
              }}>
              値段
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:47 negative:14'
              onClick={() => {
                buttonClick("充電",true)
                Reviews(va_jyudenn_p_review.reviews,va_jyudenn_n_review.reviews)
                handleReviewshow(va_jyudenn_p_review.reviews,va_jyudenn_p_review.reference,va_jyudenn_n_review.reviews,va_jyudenn_n_review.reference)
              }}>
              充電
            </button>


              

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:30 negative:18'
              onClick={() => {
                buttonClick("ゴミ",true)
                Reviews(va_gomi_p_review.reviews,va_gomi_n_review.reviews)
                handleReviewshow(va_gomi_p_review.reviews,va_gomi_p_review.reference,va_gomi_n_review.reviews,va_gomi_n_review.reference)
              }}>
              ゴミ
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while bg-red-500 text-white " 
               title='positive:48 negative:0'
              onClick={() => {
                buttonClick("使い勝手",true)
                Reviews(va_tsukai_p_review.reviews,va_tsukai_n_review.reviews)
                handleReviewshow(va_tsukai_p_review.reviews,va_tsukai_p_review.reference,va_tsukai_n_review.reviews,va_tsukai_n_review.reference)
              }}>
              使い勝手
            </button>

            <button
              className="rounded-full py-2 px-4 bg-red-500  text-white" 
              title='positive:28 negative:6'
              onClick={() => {
                buttonClick("毛",true)
                Reviews(va_ke_p_review.reviews,va_ke_n_review.reviews)
                handleReviewshow(va_ke_p_review.reviews,va_ke_p_review.reference,va_ke_n_review.reviews,va_ke_n_review.reference)
              }}>
              毛
            </button>

            <button
              className="rounded-full py-2 px-4 border boder-while bg-red-500 text-white" 
              title='positive:19 negative:2'
              onClick={() => {
                buttonClick("部屋",true)
                Reviews(va_heya_p_review.reviews,va_heya_n_review.reviews)
                handleReviewshow(va_heya_p_review.reviews,va_heya_p_review.reference,va_heya_n_review.reviews,va_heya_n_review.reference)
              }}>
              部屋
            </button>
            </div> )}
            {showDetails&&selectedProduct === "マキタCL107FDSHW掃除機"&& (
              <div className='flex flex-wrap justify-center'>
               <button
                className="rounded-full py-2 px-4 bg-red-500  text-white"
                title="positive:8 negative:1"
                onClick={()=>{
                buttonClick("充電",true)
                Reviews(sva_jyudenn_p_review.reviews,sva_jyudenn_n_review.reviews)
                handleReviewshow(sva_jyudenn_p_review.reviews,sva_jyudenn_p_review.reference,sva_jyudenn_n_review.reviews,sva_jyudenn_n_review.reference)  
                }
                }
                >
                  充電
                </button>
                
                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:7 negative:1"
                onClick={()=>{
                buttonClick("掃除",true)
                Reviews(sva_souji_p_review.reviews,sva_souji_n_review.reviews)
                handleReviewshow(sva_souji_p_review.reviews,sva_souji_p_review.reference,sva_souji_n_review.reviews,sva_souji_n_review.reference)  
                }
                }
                >
                  掃除
                </button>
                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:4 negative:2"
                onClick={()=>{
                buttonClick("使い勝手",true)
                Reviews(sva_tsukai_p_review.reviews,sva_tsukai_n_review.reviews)
                handleReviewshow(sva_tsukai_p_review.reviews,sva_tsukai_p_review.reference,sva_tsukai_n_review.reviews,sva_tsukai_n_review.reference)  
                }
                }
                >
                  使い勝手
                </button>


                <button
                className="rounded-full py-2 px-4 bg-red-500 text-white"
                title="positive:2 negative:1"
                onClick={()=>{
                buttonClick("値段",true)
                Reviews(sva_nedann_p_review.reviews,sva_nedann_n_review.reviews)
                handleReviewshow(sva_nedann_p_review.reviews,sva_nedann_p_review.reference,sva_nedann_n_review.reviews,sva_nedann_n_review.reference)  
                }
                }
                >
                  値段
                </button>
              </div>)}

        </div>
 
        {showDetails&&ClickReceive&&
        <div className="w-full flex justify-between ">
          <div className='flex items-center'>
          <ThumbsUp className="text-red-500" />
           <div className="text-red-500 text-left ml-0">{selectedAspect}{calculateKength(PReviews)}件(Positive)
           
           </div>
          </div>
          <div className='flex items-center'>
          <ThumbsDown className="text-blue-500" />
          <div className="text-blue-500 text-right mr-0">{selectedAspect}{calculateKength(NReviews)}件(Negative)</div>
          </div>
        </div>}
       
       {showDetails&&ClickReceive&&
        <div className="w-full mb-4 h-[600px] flex space-x-4">
        <ScrollArea className="border border-red-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4 ">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {PositiveData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                    <div>
                     {!expandedIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithRedHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleExpand(selectedAspect!,index)}>
                          {expandedIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {PositiveReferences[index]}
                  </div>
                </div>
              </div>
      
            ))}
          </div>
          </ScrollArea>

        <ScrollArea className="border border-blue-500 rounded-lg shadow-lg h-[600px] w-1/2 p-4">
         <div className="flex flex-col space-y-2">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {NegativeData.map((review, index) => (
              <div key={index} className="border-b py-2 last:border-b-0">
                <div className="flex flex-col">
                  <div>
                   <div>
                     {!expandedRightIndices[selectedAspect!]?.[index] && showReviewWithclickaspect(review)}
                    </div>
                  {expandedRightIndices[selectedAspect!]?.[index] &&(
                  <div>
                    <div className="mt-2">{renderReviewWithBlueHighlight(review)}</div>
                  </div>
                  )}
                   <button
                       className="font-bold ml-2"
                      //  className="text-blue-500 ml-2"
                       onClick={()=>toggleRightExpand(selectedAspect!,index)}>
                          {expandedRightIndices[selectedAspect!]?.[index] ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-500">
                    References: {NegativeReferences[index]}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </ScrollArea>
       </div>}



      </div>
    </div>
  )
}
