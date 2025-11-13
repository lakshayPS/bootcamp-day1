public class Car {
    String modelName;
    int price;

    Car(String name) {
        this.modelName = name;
    }

    Car(String name, int price) {
        this.modelName = name;
        this.price = price;
    }

    public String getModelName() {
        return modelName;
    }

    public int getPrice() {
        return price;
    }
}
