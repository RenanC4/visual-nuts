import visualNuts from './exercise-01'

it('Should log the number when it is not divisible for 3 or 5, log "Visual" when its divisible for 3, "Nuts when its divisible for 5 and "Visual Nuts" when is divisible for 3 and 5', 
() => {
    console.log = jest.fn();
    visualNuts(1,15)
    expect(console.log.mock.calls[0][0]).toBe(1);
    expect(console.log.mock.calls[1][0]).toBe(2);
    expect(console.log.mock.calls[2][0]).toBe("Visual");
    expect(console.log.mock.calls[3][0]).toBe(4);
    expect(console.log.mock.calls[4][0]).toBe("Nuts");
    expect(console.log.mock.calls[5][0]).toBe("Visual");
    expect(console.log.mock.calls[6][0]).toBe(7);
    expect(console.log.mock.calls[7][0]).toBe(8);
    expect(console.log.mock.calls[8][0]).toBe("Visual");
    expect(console.log.mock.calls[9][0]).toBe("Nuts");
    expect(console.log.mock.calls[10][0]).toBe(11);
    expect(console.log.mock.calls[11][0]).toBe("Visual");
    expect(console.log.mock.calls[12][0]).toBe(13);
    expect(console.log.mock.calls[13][0]).toBe(14);
    expect(console.log.mock.calls[14][0]).toBe("Visual Nuts");
});

it("Should throw error when parameter for visualNuts is not greather than zero", 
() => {
    expect(visualNuts(0,0)).toBe("Invalid Input, initial and final value must be greather than zero")
});

it("Should throw error when initial parameter for visualNuts is greather than final parameter", 
() => {
    expect(visualNuts(12,11)).toBe("Invalid Input, final value must be greather than initial value")
});

it('Should print Nuts when reach 500', 
() => {
    console.log = jest.fn();
    visualNuts(1,500)
    expect(console.log.mock.calls[499][0]).toBe("Nuts");
});