import React from 'react'
import { useState } from 'react';

import 'antd/dist/antd.min.css'

import cover from '../asset/image/cover.png'
import background from '../asset/image/background.jpg'
import paper from '../asset/image/paper.jpg'
import paper2 from '../asset/image/paper2.jpg'

import '../style/basic.css'

import { Button, Steps, Row, Card } from 'antd';

function Letter(props) {  
    const [clicked, setClicked] = useState(0)

    const fontStyle = {
        fontSize: 26,
        fontFamily: 'myFont',
        marginRight: '20%',
    }

    const titleStyle = {
        fontSize: 35,
        fontFamily: 'myFont'
    }

    return (
        <div style={{backgroundImage: clicked ? `url(${paper2})` : `url(${background})`, width: '100vw',
        height: '120vh', backgroundSize: cover, position: 'absolute'}}>
            { clicked==0 &&
                <img src={cover} alt="letter cover"
                    style={{marginLeft: '23%', marginTop: '10%', cursor: 'pointer'}}
                    onClick={()=>{setClicked(1)}}
                >  
                </img>
            }

            { clicked==1 &&
                <div>
                    <div style={{marginLeft: 50, marginTop: 50}}>
                        <p style={titleStyle}>To 陈姝颖，我最爱的女朋友💗：</p>
                        <p style={fontStyle}> 前几天在纽约的美好经历还历历在目，和你在一起的时光真的太快乐了，以至于这两天生活都觉得少了什么，恨不得马上和你再见面。现在回到学校，终于有空回想我们的经历，记录一些当时没有告诉你的激动与快乐。 </p>
                        <p style={fontStyle}>7.23晚，聊天叙旧，说到老友记，我就想剧里还是不现实，多年老友如何终成眷属。但出门后，你突然说异地可以，我只觉得是一场梦，下一秒就会醒来。震惊，不解，欣喜，期待，一瞬间都进入大脑，有一种断片的感觉。直到看着面前的你很久，我才确信一切是真的。不论思绪多么复杂都汇聚成一个念头：全力以赴。谢谢你当时有勇气对我说这些，不然我们又将再次错过对方，不然我会再次带着些许悔意离开，感叹彼此错过了太多。</p>
                        <p style={fontStyle}>7.27下午，咖啡店里我紧张得等了很久，前几天想了很多很多关于异地和未来的问题，但在见到你的时候完全不知道如何说起了。之后走在jersey的街上，吃泰餐，第一次体会到以不同的身份在你身边是多么美好。只要凝视着你我的快乐值就已经溢出了，但刚开始也不知道怎么表达，所以转变成时不时略带尴尬的笑容。因为太突然了，这天表现很糟糕，但快乐是真实的。当你和我说要更主动时，我真的害怕让你不满意又失去了这次机会，回家以后想了好久怎么办哈哈。</p>
                    </div>
                    <Button type='dashed' size='large' style={{marginTop: '70', marginLeft: '20%', float: 'left'}}
                        onClick={()=>setClicked(clicked-1)}> - Previous - </Button>
                    <Button type='dashed' size='large' style={{marginTop: '70', marginRight: '20%', float: 'right'}}
                     onClick={()=>setClicked(clicked+1)}> - Next - </Button>
                </div>
            }

            { clicked==2 &&
                <div>
                    <div style={{marginLeft: 50, marginTop: 50}}>
                        <p style={fontStyle}>7.30下午，坐了两小时车到陶瓷店不开又在WTC绕场一周，但见到你的一瞬间疲惫感就消失了，冰淇淋真的很甜。晚上会场本来放不太开，但上楼吃串以后，明显感觉经历了这么多，我们的距离拉近了很多，留下了除了舞会的第一张合照，终于弥补了之前的遗憾，虽然有些拘谨，也是另一种腼腆的美好。之后我发现很多普通的事情，打桌球🎱，做饭，看解说，逛街👔，只要和你一起做就乐趣无穷。来回4小时的车程🚄都觉得短暂。印象最深的是7.31晚上河边的餐厅，在夜景和氛围下，你笑起来真的太美了，碰杯清脆的声音，对视的眼神，这就是被浪漫包围的感觉吧。那时候我感觉纽约变得很小，小到只剩下我和你。</p>
                        <p style={fontStyle}>时间太快，我们刚享受转变后的快乐就要面临分别。我设想了很多尽量体面的方式，但看到你眼眶湿润地抱住我，我瞬间就控制不住情绪了😭。倒计时可以是喜悦也可以是煎熬，我多么希望分别永远不会到来，或者再晚一个小时发生也好。分别才有下次的相聚，我只能如此安慰自己。回来路上一直在听一首歌，“晚上折射到池底的灯光很美 但是我都要离去不留恋到八时”。</p>
                        <p style={fontStyle}>短短的几天就留下了太多美好的回忆，多到我都无法一一记录。时间很短，但我已经完全喜欢上了你。还记得你说过的，我们曾经都没有相互靠近，之后我进你退，现在终于双方都进了一步，这是多么美好的结局。未来还有很多想和你一起做的事情，一起走下去，真的很期待和你下次见面呀！</p>
                        <p style={fontStyle}>爱你，七夕快乐！💗💗💗 - 周彦铖 - 2022.8.4</p>
                    </div>
                    <Button type='dashed' size='large' style={{marginTop: '70', marginLeft: '20%', float: 'left'}}
                        onClick={()=>setClicked(clicked-1)}> - Previous - </Button>
                </div>
            }
        </div>
    )
  }
  
  export default Letter