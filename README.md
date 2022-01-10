[![Build status](https://ci.appveyor.com/api/projects/status/oba7x1qpsiw1j5bt?svg=true)](https://ci.appveyor.com/project/zuev720/ra-6-1)


[Github-pages](https://zuev720.github.io/ra-6.1/)



Мировые часы
===

Наверняка вы видели в офисах многих компаний, установленные часы, показывающие время в разных столицах мира:
* New York
* Moscow
* London
* Tokyo 

И т.д.

![Watches](https://github.com/netology-code/ra16-homeworks/raw/master/lifecycle-http/watches/assets/watches.png)

Общая механика:

1. Вы заполняете поля название и временная зона (указываете смещение в часах относительно Гринвича) и нажимаете кнопку "Добавить"
1. Часы автоматически добавляются и (что самое важное) часы начинают "тикать", т.е. отсчитываются секунды, минуты и часы
1. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки (`setTimeout`, `setInterval` и другие) должны вычищаться в соответствующем методе жизненного цикла

Упрощения: если вам сложно реализовать механику со стрелками (через css - см. `transform` и `rotate()`), то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС

Важно: при создании часов, в поле "timezone" нужно вводить цифру смещения от UTC
