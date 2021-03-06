import React, { Component } from 'react';
import '../App.css';
import IT1 from '../image/IT1.JPG';
import senior2 from '../image/senior2.png';
import ReactGA from 'react-ga';

export default class ItProj extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="container">
        <div className="pagecontent">
          <h5>Senior Project</h5>
          <img src={senior2} width="50%" />
          <p>
            นี่คือครั้งแรกเลยครับที่ผมได้ลองเขียนเว็บไซต์แบบง่ายๆ และได้ศึกษา
            Machine Learning แม้ว่าผมจะศึกษาอยู่ในสาขายานยนต์และการออกแบบ
            แต่เมื่อผมตัดสินใจอย่างชัดเจนว่า
            “ผมไม่ได้ต้องการที่จะอยู่ในสายโรงงานนี้อีกต่อไป”
            ผมจึงเลือกโปรเจคที่ไม่เกี่ยวกับสาขาที่ตัวเองเรียนอย่างสิ้นเชิง
            และผมก็โชคดีที่อาจารย์ให้โอกาสผมในวันนั้น… <br></br>
            <br></br>
            หัวข้อที่ผมทำชื่อว่า "Image Processing for Medical Treatment"
            เป็นการใช้ Machine Learning ประมวลผลจากภาพ
            เพื่อดูว่าคนไข้มีอาการแพ้ยาหรือไม่จากภาพของผู้ป่วย
            แต่ปัญหาก็เกิดขึ้นมากมายเช่นกันครับ
            เริ่มจากการที่ผมไม่สามารถเข้าถึงแหล่งข้อมูลทางการแพทย์ได้
            ทำให้ผมต้องเขียนวิธีการดึงข้อมูลที่สำคัญออกมาเอง
            เนื่องจากข้อมูลที่สามารถนำไปสอน machine learning มีอย่างจำกัด
            และปัญหาถัดมา เมื่อทำการสอนmachine learning
            จนเกือบจะเสร็จสิ้นกระบวนการ ผมกับเพื่อนก็ตระหนักได้ว่า "อ้าว!
            แล้วเราจะแสดงผลอย่างไร?" จึงทำให้ผมต้องดิ้นรนอีกครั้ง
            เพื่อหาวิธีการที่จะแสดงผล
            แต่ผมโชคดีที่ว่าตอนนั้นยังพอมีเวลาในการแก้ไข ผมเลยเริ่มศึกษา
            Libraryที่สามารถทำ Web application ได้ในขั้นพื้นฐานเป็นภาษา Python
            นั้นเองจึงทำให้ผมเริ่มรู้จัก Library ที่ชื่อว่า “Django”
            สิ่งนี้แหละครับ คือชนวนสำคัญที่ทำให้ผมได้ลองทำ Web application
            และศึกษาเพิ่มเติม ผมเริ่มรู้สึกว่า จริงๆแล้วมันก็สนุกดีนะ
            แต่ผมยังไม่แน่ใจ และยังไม่สามารถตอบตัวเองได้ว่า เราชอบมันจริงหรือไม่
            ผมเลยตัดสินใจเริ่มศึกษาอย่างจริงจังด้วยตนเองครับ
          </p>
        </div>
        <div className="pagecontent">
          <h5>IOT Project</h5>
          <img src={IT1} width="50%" />

          <p>
            ผมเริ่มเรียนวิชา IOT ตอนปี4 เทอม1
            ซึ่งเป็นช่วงหลังจากที่ผมฝึกงานตามที่คณะบังคับเสร็จเรียบร้อยแล้ว
            ผมจึงได้รู้ว่าผมไม่อยากทำสายยานยนต์ต่อ
            ก็เลยอยากจะลงวิชาที่เกี่ยวกับสารสนเทศน์มากขึ้น วิชาIOTเป็นวิชาเลือก
            ผมเลยมีโอกาสได้เรียนเกี่ยวกับภาษา C โดยใช้บอร์ด STM32 และได้ใช้
            Raspberry PI โดยเขียนเป็นภาษา Python
            สิ่งที่น่าสนุกจากการเรียนวิชานี้คือ การที่จะเรียนจบวิชานี้ได้
            อาจารย์มีการมอบหมายให้นิสิตใช้ทั้งสองบอร์ด
            ทำให้มันสามารถสื่อสารซึ่งกันและกันได้ และใช้อย่างน้อย 3
            อุปกรณ์ที่ต่อเป็นภาษา C และต้องใช้ Pi Camera ที่ต่อกับ Raspberry PI
            แต่สิ่งที่ท้าทายกว่านั้น คือการใช้ Machine Learning
            เข้ามาผสมด้วยโดยไม่กำหนดหัวข้อ ผมจึงเลือกที่จะใช้ Machine Learning
            เพื่อประมวลภาพ เพราะผมต้องทำใน Senior Project อยู่แล้ว โดยใช้
            Library ของ Keras<br></br> <br></br>
            ผมนำเสนอโปรเจคที่สามารถจับภาพได้ว่า
            ผู้ใช้งานต้องการให้หุ่นยนต์เดินไปที่สถานี(station)ใดในโรงงาน
            แล้วจึงให้หุ่นยนต์เดินตามเส้นทางที่กำหนดได้ด้วยตัวมันเอง
            แต่การจะทำนั้นไม่ได้ทำขึ้นมาง่ายๆ มีปัญหาอยู่เต็มไปหมด
            เริ่มจากการที่ใช้ machine learning
            ที่ประมวลผลภาพเลขสถานีว่าผู้ใช้งานต้องการให้ไปสถานีไหน
            โดยภาพที่ได้จากกล้อง PI camera นั้นเป็นภาพที่มีคุณภาพค่อนข้างไม่ดี
            บวกกับแสงตกกระทบทำให้เกิดเงาในภาพ
            ทำให้ภาพที่ใส่เข้าไปเพื่อประมวลผลนั้นไม่ได้ตรงตามที่Library ของ
            Keras ที่ถูกสอนมาแล้ว
            จึงทำให้ต้องแก้โดยการที่เขียนวิธีทำให้รูปสะอาดขึ้นมาจาก library
            อื่นและนำรูปเข้าไปประมวลผลภายหลัง ผลสรุปจากโครงงานวิชานี้คือ
            ถ้าจะยังใช้กล้องเพื่อถ่ายรูปมาเพื่อทำ image process ผมคิดได้2
            วิธีที่จะทำให้กระบวนการทำมีประสิทธิภาพมากขั้นนั้นคือ 1.
            เพื่อประสิทธิภาพในการจัดการรูป(ทำให้รูปนั้นสะอาด)จากกล้องถ่ายรูป 2.
            เพิ่มการTrain จากกล้องถ่ายรูปที่เราจะใช้ Test
            เพื่อเลียนแบบสภาพแวดล้อมที่จะใช้จริง
            วิชานี้ทำให้ผมได้เรียนรู้สิ่งใหม่ๆนอกเหนือจากสาขาที่ผมศึกษาอยู่
            เรียกได้ว่าเบิกความรู้ใหม่มาเยอะพอสมควรเลยครับ<br></br>
            <br></br>
            สุดท้ายนี้ผมอยากขอบคุณอาจารย์ที่ให้โอกาสนิสิตอย่างผมที่ไม่มีความรู้เรื่อง
            Machine Learning ได้ลองลงมือทำดูด้วยตนเอง
            ลองผิดลองถูกจนกระทั่งผลงานออกมาประสบความสำเร็จ
          </p>
          <p>
            <br></br> และสุดท้ายสำหรับทุก Project ที่ผ่านมา
            ผมปฏิเสธไม่ได้เลยว่าผมไม่สามารถทำมันได้เพียงลำพังคนเดียว
            ทุกๆคนที่เข้ามาช่วยกันทำไม่ว่าจะเป็นงานคู่หรืองานกลุ่ม
            ก็ต้องขอขอบคุณเพื่อนๆ เหล่านั้นด้วยคัรบ
          </p>
        </div>
      </div>
    );
  }
}
