# Technologies 
### Front-end
1. antd
  * Front-end Framework ตัวหนึ่งที่ ที่ใช้สำหรับพัฒนาเว็บไซต์ให้ สวยงาม เป็นระบบ และมีcomponent มากมายหลากหลายให้เลือกใช้
2. axios
  * ใช้ในการดึงข้อมูล,อัพเดทข้อมูล จาก REST API ได้ง่าย
3. moment
  * moment เป็นที่นิยมในการใช้แปลง format ในเรื่องของเวลาและใช้งานง่าย
4. node-sass
  * ต้องการใช้ scss ในการสร้าง style ที่ใช่ได้หลากหลายและง่ายกว่า CSS
5. react
  * ในส่วนของหน้าเว็บมีการจัดการในหลายๆส่วน การใช้ react เข้ามาช่วยในเรื่องการแยก Component ให้สามารถใช้ได้ง่าย
6. react-dom
  * เนื่องจากต้องการใช้เชื่อมหน้าเว็บไซต์ ให้เป็นเว็บที่สมบูรณ์ ใช้ react-dom เข้ามาช่วยในการจัดการ link,route ให้ง่ายขึ้น
7. babel
  * ต้องการเขียน code ในรูปแบบ es6 ที่ง่ายต่อการใช้งาน เลือกใช้ Babel ในการแปลงโค้ดเวอร์ชั่นใหม่กลับไปเป็น ES5 
8. eslint 
  * ช่วยลดข้อผิดพลาด(Bugs) และ ช่วยในการจัดรูปแบบ code ให้ดูสวยงาม
### Back-end
1.body-parser
  * ต้องการแปลงข้อมูลให้เป็น JavaScript Object จึงใช้ body-parser ทำการแกะข้อมูล JSON ทาง Request body 
2. cors
  * เกิดข้อผิดพลาดความปลอดภัยของ Browsers HTTP การอนุญาตให้เข้าถึงแหล่งข้อมูลจะต้องอยู่โดเมนเดียวกันเท่านั้น ใช้ cors เพื่อแก้ปัญหานี้
3. express
  * ช่วยในเรื่องการทำ routing, middleware การจัดการ request และ response ให้ง่ายขึ้น
4. mongoose
  * เป็นเทคนิคที่ง่ายในการเชื่อมต่อ mongoDB 
5. nodemon
  * ใช้เพื่อให้ง่ายต่อการติดตั้ง Library ต่างที่จะใช้ใน project
# Architecture Design
# Installation 
1. Using npm:
>npm install
or 
2. Using yarn:
>yarn install

  เมื่อ install เสร็จเรียบร้อยก็ทำการสั่ง run project
1. Using npm:
>npm start
or 
2. Using yarn:
>yarn start
# Deployment 