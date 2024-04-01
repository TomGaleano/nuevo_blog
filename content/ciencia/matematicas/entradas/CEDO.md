+++
title = 'CEDO'
date = 2024-03-31T19:10:10-05:00
draft = false
bookcase_cover_src = 'covers/CEDO.png'
bookcase_cover_src_dark = 'covers/CEDO-b.png'
+++

# Resumen CEDO $1^{\text{er}}$ corte:

:::danger
## Definición:
Una **ecuación diferencial ordinaria de primer orden** es una ecuación que relaciona la primer derivada de una función $y(x)$ con la función misma y con la variable independiente. Más formalmente una $\text{EDO}$ de $1^{\text{er}}$ orden es una función $y'=F(x,y)$.
:::

Ejemplos de $\text{EDO}$s de $1^{\text{er}}$ orden son:
- $y'=xy-e^x$
- $y'=cos(x)+x^2$
- $y'=y^3$

Una solución a una $\text{EDO}$ será una función $\phi(x)$ tal que $\phi'(x)\equiv F(x,\phi(x))$

Ahora, veamos un teorema importante,
:::info
## Teorema de existencia y unicidad para primer orden:
Si las funciones $F(x,y)$ y $\frac{\partial F}{\partial y}$ son continuas en un rectángulo $a<x<b,\ c<y<d$ que contenga al punto $(x_0,y_0)$. Entonces en algún intervalo $x_0-h<x<x_0$ existe una única función $\phi(x)$ tal que $\phi'(x)\equiv F(x,\phi(x))$ y $\phi(x_0)=y_0$.
:::

Esto nos permite resolver problemas de valor inicial ($\text{PVI}$).

Dependiendo del tipo de ecuación que tratemos, habrán metodos de resolución diferentes. Aquí están las clases más importantes:

## Variables separables:
Tienen la forma general

$$ y'=\frac{f(x)}{g(y)}$$

Y para resolverlos, primero debemos dejar la ecuación como

$$ g(y)y'=f(x) $$

El siguiente paso involucra integrar a ambos lados con respecto $x$ y usar la notación de Lebesgue

$$\int g(y)\frac{dy}{dx}dx=\int f(x)dx$$

Por la regla de la cadena, esto es

$$\int g(y)dy=\int f(x)dx$$

Y así, al despejar $y$, obtendremos la familia de soluciones a la $\text{EDO}$. Para $\text{PVI}$ se va a tener que

$$\int^{\phi(x)}_{y_0} g(y)dy=\int^x_{x_0} f(x)dx$$

Va a ser la solución.

## Ecuaciones exactas:

Tienen la forma general

$$M(x,y)dx+N(x,y)dy=0$$

Donde además se cumpla que

$$\frac{\partial M}{\partial y}=\frac{\partial N}{\partial x}$$

En base a la fundamentación teórica que existe una función solución con la forma

$$dF=Mdx+Ndy$$

Así, podemos elegir integrar ya sea con respecto a $x$ (o $y$) para llegar a

$$F(x,y)=\int M(x,y)dx+C(y)$$

Donde asumimos que $C(y)$ es una constante de integración que puede depender de $y$, necesitamos despejar $g(y)$ para tener completamente a $F(x,y)$ por lo que

$$\begin{align*}
C(y)=F(x,y)-\int M(x,y)dx
\end{align*}$$

Derivando parcialmente con respecto a $y$ tenemos

$$\begin{align*}
C'(y)&=\frac{\partial F(x,y)-\int M(x,y)dx}{\partial y}\\
&=\frac{\partial F(x,y)}{\partial y}-\frac{\partial \int M(x,y)dx}{\partial y}\\
&=N(x,y)-\frac{\partial \int M(x,y)dx}{\partial y}
\end{align*}$$

Por lo que

$$C(y)=\int\left[ N(x,y)-\frac{\partial \int M(x,y)dx}{\partial y}\right] dy$$

La función solución a la $\text{EDO}$ es entonces

$$F(x,y)=K$$

Para algún $K$ definido por un $\text{PVI}$.

## Ecuaciones lineales:

Son de la forma

$$a(x)y'+b(x)y+c(x)=0$$

Donde podemos despejar $y'$ como

$$y'+\left(\frac{b}{a}\right)(x)y=-\left(\frac{c}{a}\right)(x)$$

Simplificando notación

$$y'+P(x)y=Q(x)$$

Y cuya solución es de la forma

$$y=\frac{1}{\mu(x)}\left[\int\mu(x)Q(x)dx+c\right]$$

Donde

$$\mu(x)=e^{\int P(x)dx}$$

En $\text{PVI}$ se tiene que

$$\mu(x)=e^{\int^x_{x_0}P(x)dx},\ y(x)=\frac{1}{\mu(x)}\left[y_0+\int^x_{x_0}\mu(x)Q(x)dx\right]$$

# Sustituciones y ecuaciones especiales:

## Homogéneas:

Si se tiene una una función $y'=F(x,y)$ que se puede reescribir de la forma

$$y'=r(1,\frac{y}{x})$$

Entonces se puede hacer la sustitución $u=\frac{y}{x}$ donde $y'=u+xu'$. Tenemos la ecuación

$$u+xu'=r(1,u)$$

Que es de variables separables

## Coeficientes lineales

Son de la forma

$$(a_1x+b_1y+c_1)dx+(a_2+b_2+c_2)dy=0$$

Donde trataremos 3 casos individuales

### Si $a_1b_2=a_2b_1$:

Podemos reescribir la ecuación a

$$y'=a\frac{x+by+d_1}{x+by+d_2}$$

Dado $a=-\frac{a_1}{a_2},\ b=\frac{b_1}{a_1}=\frac{b_2}{a_2}$ y $d_i=\frac{c_i}{a_i}$. El cambio de variable $u=x+by$ permite

$$\frac{1}{b}(u'-1)=a\frac{u+d_1}{u+d_2}$$

Que es de variables separables.

### Si $c_1=0=c_2$

Reescribimos la ecuación como

$$\begin{align*}
y'&=-\frac{a_1x+b_1y}{a_2x+b_2y}\\
&=-\frac{a_1+b_1\frac{y}{x}}{a_2+b_2\frac{y}{x}}
\end{align*}$$

Donde podemos aplicar la técnica de las ecuaciones homogéneas.

### Si $a_1b_2\neq a_2b_1$

Primero debemos el siguiente sistema de ecuaciones

$$ \begin{pmatrix}a_{1}&b_{1}\\a_{2}&b_{2}\end{pmatrix}\cdot\begin{pmatrix}x\\y\end{pmatrix}=\begin{pmatrix}c_1\\c_2\end{pmatrix}$$

Como $a_1b_2-a_2b_1\neq0$ sabemos que el determinante de la matriz de coeficientes es distinto de 0 y por tanto, existe una solución al sistema $x=h$ y $y=k$, por lo que podemos hacer la sustición

$$x=u+h,\ y=v+k,\ \frac{dy}{dx}=\frac{dv}{du}$$

Que realmente solo es una traslación del plano, así

$$\begin{align*}
\frac{dv}{du}&=-\frac{a_1(u+h)+b_1(v+k)+c_1}{a_2(u+h)+b_2(v+k)+c_2}\\
&=-\frac{a_1u+b_1v+a_1h+b_1k+c_1}{a_2u+b_2v+a_2h+b_2k+c_2}\\
&=-\frac{a_1u+b_1v}{a_2u+b_2v}
\end{align*}$$

Donde podemos aplicar la técnica del caso anterior.

## Ecuación de Bernoulli

Es de la forma

$$y'+P(x)y=Q(x)y^n$$

Y se puede solucionar con la sustitución

$$u=y^{1-n},\ u'=(1-n)y^{-n}y'$$

Reemplazando tenemos

$$\frac{y^n}{1-n}u'+P(x)y=Q(x)y^n$$

Dividiendo por $y^n$

$$\frac{1}{1-n}u'+P(x)y^{1-n}=Q(x)$$

Esto es

$$\frac{1}{1-n}u'+P(x)u=Q(x)$$

Una ecuación lineal al multiplicar por $(1-n)$.



## Ecuación de Ricatti:

Es de la forma

$$y'=P(x)+Q(x)y+R(x)y^2$$

Y la podemos resolver sii conocemos una solución particular

$$y_1'\equiv P(x)+Q(x)y_1+R(x)y_1^2$$

Empezamos planteando la sustitución

$$y=y_1+u,\ y'=y_1'+u'$$

Donde, reemplazando en la ecuación inicial tenemos

$$y_1'+u'=P(x)+Q(x)(y_1+u)+R(x)(y_1+u)^2$$

Desarrollando

$$y_1'+u'=P(x)+Q(x)y_1+Q(x)u+R(x)y_1^2+2R(x)y_1u+R(x)u^2$$

Usando que $y_1$ es una solución a la $\text{EDO}$

$$\begin{align*}
u'&=Q(x)u+2R(x)y_1u+R(x)u^2\\
&=\left[Q(x)+2R(x)y_1\right]u+R(x)u^2
\end{align*}$$

Que es una ecuacion de Bernoulli con $n=2$.

## Ecuación de Lagrange:

Es de la forma

$$y=g(y')x+f(y')$$

La idea es parametrizar la función con una sustitución $y'=p$

$$y=g(p)x+f(p)$$

Derivando con respecto a $y$

$$p=g'(p)p'x+f'(p)p'$$

Podemos plantear $x$ en términos de $p$ como

$$\frac{dx}{dp}-\frac{g'(p)}{p-g(p)}x=\frac{f'(p)}{p-g(p)}$$

Una ecuación lineal que se resuelve dando lugar a una nueva $h(x,p)$ tal que

$$h(x,p)=x(p)=\frac{1}{e^{\int-\frac{g'(p)}{p-g(p)}dp}}\left[\int(e^{\int-\frac{g'(p)}{p-g(p)}dp}))\frac{f'(p)}{p-g(p)}+C\right]$$

De lo que sigue

$$y(p)=g(p)x(p)+f(p)$$

Y la solución es una curva de la forma
$$y=g(p)x+f(p)$$

$$(x(p),y(p))$$


Las aplicaciones son para ingenieros, por tanto, las omito.

# $\text{EDOs}$ lineales de orden superior

### Son de la forma

$$a_n(x)y^{(n)}+a_{n-1}(x)y^{(n-1)}+...+a_1(x)y'+a_0(x)y=g(x)$$

- Tenemos que si $g(x)\equiv0$, no hay variables libres $x$ y por tanto se denomina **homogénea**.
- Si $a_i(x)\equiv a_i\in\mathbb{R},\ 0\leq i \leq n$, es decir, las derivadas de $y$ tienen coeficientes reales, decimos que la ecuación lineal es de **coeficientes constantes**.

:::info
## Teorema de existencia y unicidad para órdenes superiores:

Sea una $\text{EDO}$ lineal y de orden $n$ de la forma

$$a_n(x)y^{(n)}+a_{n-1}(x)y^{(n-1)}+...+a_1(x)y'+a_0(x)y=g(x)$$

Donde $g(x),a_n(x),...,a_0(x)\in C^1(a,b)$ tal que $x_0\in(a,b)$. Entonces para cualesquiera valores iniciales $y_i,\ 0\leq i<n$, existe una única solución $\phi(x)$ en el intervalo que suple
$$y^{(i)}(x_0)=y_i,\ 0\leq i<n$$

### Nota:
No se garantiza que la solución $\phi(x)$ sea única en todo el dominio de la ecuación, en cambio se dice que todas las curvas que pasan por $x_0$ tienen un comportamiento idéntico en $(a,b)$ :).
:::

:::info
### Teorema:
Sea una $\text{EDO}$ lineal, homogénea y de orden $n$. Si $\phi(x)$ es una solución, entonces $\alpha\phi(x)$ es también una solución para todo $\alpha\in\mathbb{R}$.

:::spoiler *Demostración:*
Por la hipótesis, tenemos que la $\text{EDO}$ es de la forma
$$a_n(x)y^{(n)}+a_{n-1}(x)y^{(n-1)}+...+a_1(x)y'+a_0(x)y=0$$

Usando que $\phi(x)$ es solución, sabemos que
$$a_n(x)\phi^{(n)}(x)+a_{n-1}(x)\phi^{(n-1)}(x)+...+a_1(x)\phi'(x)+a_0(x)\phi(x)\equiv0$$

Ahora vemos el caso $\alpha\phi(x),\ \alpha\in\mathbb{R}$
$$F(x,\alpha\phi(x))=\sum_{i=0}^na_i(x)[\alpha\phi]^{(i)}(x)$$

Usando que la derivada es un operador lineal, tenemos
$$F(x,\alpha\phi(x))=\sum_{i=0}^na_i(x)\alpha\phi^{(i)}(x)$$

Factorizando $\alpha$,
$$\begin{align*}
F(x,\alpha\phi(x))&=\alpha\left[\sum_{i=0}^na_i(x)\phi^{(i)}(x)\right]\\
&=\alpha[F(x,\phi(x))]\\
&=\alpha\cdot 0\\
&\equiv0
\end{align*}$$

Luego concluimos $\alpha\phi(x)$ también es solución para $\alpha\in\mathbb{R}$.
:::
Por este mismo argumento también podemos demostrar que la suma de dos soluciones $\phi_1(x)+\phi_2(x)=\phi_3(x)$ tambien es una solución de una $\text{EDO}$ homogénea de orden $n$. Luego tenemos que el conjunto de todas las soluciones de una $\text{EDO}$ de este tipo es un grupo con respecto a la suma, más aún parece ser un espacio vectorial.