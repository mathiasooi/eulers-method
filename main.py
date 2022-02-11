import matplotlib.pyplot as plt
from math import *

def f(x, y, eq):
    return eval(eq)

def main():
    y0 = float(input("y(0): "))
    x0 = float(input("x0: "))
    x1 = float(input("x1: "))
    dx = float(input("dx: "))
    dydx = input("dydx: ")

    xs, ys = [], [y0]
    while x0 < x1 + dx:
        xs.append(x0)
        ys.append(ys[-1] + dx * f(x0, ys[-1], dydx))
        x0 += dx
        
    if input("display values? (y) ").lower() == "y":
        print("n", "x(n)", "y(n)", sep="\t")
        for n, xn, yn in zip(range(len(xs)), xs, ys):
            print(n, xn, yn, sep="\t")
    
    plt.plot(xs, ys[:-1], "-o")
    plt.show()

if __name__ == "__main__":
    main()