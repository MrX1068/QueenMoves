<script>
    let Queen = {
        {
            direction: 's',
            position: [4, 0],
            whereabouts = []

        }
    }
    function changeDirection(direction) {
        switch(direction) {
         case "N":
            direction1 = 'n;
            break;
         case "S" :
            direction1 = 's';
            break;
         case 'E' :
            direction1 = 'e';
            break;
         case 'W' :
            direction1 = 'w';
            break;
         case 'NE' :
            direction1 = 'ne';
            break;
         case 'NW' :
            direction1 = 'nw';
            break;
         case 'SE' :
            direction1 = 'se';
            break;
         case 'SW' :
            direction1 = 'sw';
            break;
        }
    }
    function moveForward() 
    {
        let xposition = Queen.position.pop();
        let yposition = Queen.position.pop();
        console.log(Queen.position);
        
    }
    function jumpMoveForward(number_0f_steps) 
    {
      let xposition = Queen.position.pop();
      let yposition = Queen.position.pop();
      console.log(Queen.position);
    }
    function updatePosition(position) {
        Queen.whereabouts.push(position)
        console.log(Queen.whereabouts);
    }
</script>