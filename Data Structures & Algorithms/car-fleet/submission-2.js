class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = [];
        for (let i = 0; i < position.length; i++) {
            const time = (target - position[i]) / speed[i];
            cars.push([position[i], time]);
        }
        cars.sort((a, b) => b[0] - a[0]);
       
        let fleet = 0;
        let lastTime = 0;

        for (const [position, time] of cars) {
            if (time > lastTime) {
                fleet++;
                lastTime = time;
            }
        }
        return fleet;
    }
}
