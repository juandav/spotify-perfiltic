import React from 'react'
import {
  Nav, List, Item, Link,
  TimeLineNav, TimeLineContent, TimeLineMenu, TimeLineButton,
  TimeLineTitle
} from './styles'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export const TimelineNav = ({
  isOpenTimeLine = false,
  onToggle,
  data,
  token
}) => {
  return (
    <TimeLineNav>
      <TimeLineContent hidden={!isOpenTimeLine ? 'hidden' : ''}>
        <TimeLineTitle />
        <Nav>
          <List>
            {data.map(item => (
              <Item key={item.id}>
                <Link href={`${item.href}?access_token=${token}`}>{item.name}</Link>
              </Item>
            ))}
          </List>
        </Nav>
      </TimeLineContent>
      <TimeLineMenu>
        <TimeLineButton>
          {
            isOpenTimeLine
              ? <MdChevronLeft onClick={() => onToggle()} />
              : <MdChevronRight onClick={() => onToggle()} />
          }
        </TimeLineButton>
      </TimeLineMenu>
    </TimeLineNav>
  )
}

export default TimelineNav

/**
 *
 * <a class='TimelineNav-currentCourse' href='/clases/flutter/'>
        <figure class='TimelineNav-courseBadge'>
          <img src='https://static.platzi.com/media/achievements/1386-b8a48176-0809-49b9-bde1-8664fe6c3a93.png' alt='Curso de Flutter' width='36px' />
        </figure>
        <p class='TimelineNav-courseTitle'>Curso de Flutter</p>
      </a>
      <div class='TimelineNav-conceptList'>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>1. Bienvenida e Introducción</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' alt='Desarrollando en Flutter'>
              <div class='TimelineNav-name'>Desarrollando en Flutter</div>
              <div class='TimelineNav-check icon-check_B is-seen nextMaterialSeen' />
            </a>
            <a class='TimelineNav-materialList is-active' alt='¿Qué es Flutter?'>
              <div class='TimelineNav-name'>¿Qué es Flutter?</div>
              <div class='TimelineNav-check icon-check_B is-seen' />
            </a>
            <a class='TimelineNav-materialList' alt='Dart y Flutter'>
              <div class='TimelineNav-name'>Dart y Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16256-sintaxis-de-dart/' alt='Sintaxis de Dart'>
              <div class='TimelineNav-name'>Sintaxis de Dart</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Flutter para desarrolladores Android, iOS y Xamarin.forms '>
              <div class='TimelineNav-name'>Flutter para desarrolladores Android, iOS y Xamarin.forms </div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16257-flutter-para-desarrolladores-react-native/' alt='Flutter para desarrolladores React Native'>
              <div class='TimelineNav-name'>Flutter para desarrolladores React Native</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='¿Cómo luce una app construída en Flutter?'>
              <div class='TimelineNav-name'>¿Cómo luce una app construída en Flutter?</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16313-primer-reto/' alt='Primer reto'>
              <div class='TimelineNav-name'>Primer reto</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>2. Creando mi entorno de desarrollo</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16259-requerimientos-de-hardware-y-software/' alt='Requerimientos de Hardware y Software'>
              <div class='TimelineNav-name'>Requerimientos de Hardware y Software</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16316-instalando-flutter-en-android-studio-y-visual-stud/' alt='Instalando Flutter en Android Studio y Visual Studio Code'>
              <div class='TimelineNav-name'>Instalando Flutter en Android Studio y Visual Studio Code</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Composición de un proyecto en Flutter'>
              <div class='TimelineNav-name'>Composición de un proyecto en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>3. Interfaces en Flutter</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' alt='Programación Declarativa en Flutter'>
              <div class='TimelineNav-name'>Programación Declarativa en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Estructura de un programa en Flutter'>
              <div class='TimelineNav-name'>Estructura de un programa en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Hola Mundo en Flutter'>
              <div class='TimelineNav-name'>Hola Mundo en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widgets básicos'>
              <div class='TimelineNav-name'>Widgets básicos</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widgets con estado y sin estado'>
              <div class='TimelineNav-name'>Widgets con estado y sin estado</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Análisis de Interfaces de Usuario en Flutter'>
              <div class='TimelineNav-name'>Análisis de Interfaces de Usuario en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16331-definiendo-los-layouts-de-nuestra-interfaz/' alt='Definiendo los layouts de nuestra interfaz'>
              <div class='TimelineNav-name'>Definiendo los layouts de nuestra interfaz</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16263-segundo-reto/' alt='Segundo reto'>
              <div class='TimelineNav-name'>Segundo reto</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>4. Widgets sin estado en Flutter</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' alt='Flutter Widgets: Container, Text, Icon, Row'>
              <div class='TimelineNav-name'>Flutter Widgets: Container, Text, Icon, Row</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Flutter Widgets: Column'>
              <div class='TimelineNav-name'>Flutter Widgets: Column</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Recursos en Flutter: Tipografías y Google Fonts'>
              <div class='TimelineNav-name'>Recursos en Flutter: Tipografías y Google Fonts</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Image'>
              <div class='TimelineNav-name'>Widget Image</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Apilando Textos'>
              <div class='TimelineNav-name'>Widget Apilando Textos</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widgets Decorados'>
              <div class='TimelineNav-name'>Widgets Decorados</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Imagen Decorada'>
              <div class='TimelineNav-name'>Widget Imagen Decorada</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Listview'>
              <div class='TimelineNav-name'>Widget Listview</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Button, InkWell'>
              <div class='TimelineNav-name'>Widget Button, InkWell</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16272-tercer-reto/' alt='Tercer reto'>
              <div class='TimelineNav-name'>Tercer reto</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>5. Widgets con estado en Flutter</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16488-botones-en-flutter/' alt='Botones en Flutter'>
              <div class='TimelineNav-name'>Botones en Flutter</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Clase StatefulWidget: Cómo se compone'>
              <div class='TimelineNav-name'>Clase StatefulWidget: Cómo se compone</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widget Floating Action Button'>
              <div class='TimelineNav-name'>Widget Floating Action Button</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Widgets BottomNavigationBar'>
              <div class='TimelineNav-name'>Widgets BottomNavigationBar</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' alt='Generando Navegación en BottomNavigationBar'>
              <div class='TimelineNav-name'>Generando Navegación en BottomNavigationBar</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16278-personalizando-nuestro-bottomnavigation-bar-a-cupe/' alt='Personalizando nuestro BottomNavigation Bar a Cupertino iOS BottomBar'>
              <div class='TimelineNav-name'>Personalizando nuestro BottomNavigation Bar a Cupertino iOS BottomBar</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16279-cuarto-reto/' alt='Cuarto reto'>
              <div class='TimelineNav-name'>Cuarto reto</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
        <section class='TimelineNav-completeConcept'>
          <section class='TimelineNav-concept'>
            <div>6. Fin del Curso</div>
          </section>
          <section class='TimelineNav-MaterialList'>
            <a class='TimelineNav-materialList' alt='Conclusiones'>
              <div class='TimelineNav-name'>Conclusiones</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
            <a class='TimelineNav-materialList' href='/clases/1386-flutter/16493-terminamos/' alt='¡Terminamos!'>
              <div class='TimelineNav-name'>¡Terminamos!</div>
              <div class='TimelineNav-check icon-check_B' />
            </a>
          </section>
        </section>
      </div>
      <a class='TimelineNav-nextCourseFolded' href='/clases/git-github/' alt='Curso Profesional de Git y GitHub'>
        <figure class='TimelineNav-nextBadge'>
          <img src='https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png' alt='Curso Profesional de Git y GitHub' width='35px' />

        </figure>
        <div class='TimelineNav-nextCourseInfo'><strong>Continúa con:</strong>
          <p class='TimelineNav-nextCourseTitle'>Curso Profesional de Git y GitHub</p>
        </div>
      </a>
 */
