console.log("************** DELIVERABLE 05 *********************");

console.log("El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.");
console.log("Cuando se llame al método 'play' el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean 'true', y por tanto deberá mostrarse por consola el mensaje:");

console.log("Congratulations!!!. You won <número de monedas> coins!!");

console.log("y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.");
console.log("En caso contrario deberá mostrar otro mensaje:");

console.log("Good luck next time!!");
console.log("--------------------------------------------");


class SlothMachine {
  private coins: number = 0;
  
  public play() {
    this.coins++;
    const results = [this.getRouleteResult(), this.getRouleteResult(), this.getRouleteResult()];
    const finalResult = this.getFinalResult(results);
    if (finalResult === true) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.resetCoins();
    } else {
      console.log("Good luck next time!!");
    }
  }

  private getRouleteResult(): boolean {
    return (Math.random() >= 0.5);
  }
 
  private resetCoins() {
    this.coins = 0;
  }

  private getFinalResult(rouletes: boolean[]): boolean {
    return rouletes.every(result => result === true);
  }
 }

const machine1 = new SlothMachine();
console.log("play 10 times at slot machine: ");
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
