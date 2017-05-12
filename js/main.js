var vm = new Vue({
	el: '#app',
	data(){
		return{
			rows:[
				{"row":'0'},
				{"row":'1'},
				{"row":'2'},
			],
			columns:[
				{"column":'0'},
				{"column":'1'},
				{"column":'2'},
			],
			circle:0,
			round:0,
			wingroup:[
				['00','01','02'],
				['10','11','12'],
				['20','21','22'],
				['00','10','20'],
				['01','11','21'],
				['02','12','22'],
				['00','11','22'],
				['02','11','20'],
			],
			player1:[],
			player2:[],
			gameover:false,
			winner:"",
			mode:0,
			win:0,
		}
	},
	methods: {
		choose(id){
			console.log(id);
			if($('#'+id).text()!="");
			else if(this.gameover==true);
			else
			{
				if(this.circle==0)
				{
					$('#'+id).text('O');
					this.player1.push(id);
					this.circle=(this.circle+1)%2;
					this.check(this.player1);
					++this.round;
				}
				else
				{
					$('#'+id).text('X');
					this.player2.push(id);
					this.circle=(this.circle+1)%2;
					this.check(this.player2);
				}
				if(this.gameover && this.circle==0)
					this.winner="Cross is winner";
				else if(this.gameover && this.circle==1)
					this.winner="Circle is winner";
			}
		},
		check(player){
			var my=this;
			chooseb=false;
			truetemp="00";
			if(this.round==0 && this.circle==1 && !my.gameover)
			{
				chooseb=true;
				if(this.player1[0]=="11")
				{
					// this.choose("00");
					this.mode=1;
				}
				else
				{
					// this.choose("11");
					truetemp="11";
					this.mode=2;
				}
			}
			else if(this.circle==1 && !my.gameover)
			{
				$.each(my.wingroup, function(index, winelement) {
					var p_dot=0;
					var temp;
					$.each(winelement, function(index, el) {
						var t_dot=p_dot;
						$.each(my.player2, function(index, p_el) {
							if(p_el==el)
								++p_dot;
						});
						if(p_dot==t_dot)
							temp=el;
					});
					if(p_dot==2 && my.circle==1 && $('#'+temp).text()=="" && !chooseb)
					{
						//my.choose(temp);
						chooseb=true;
						truetemp=temp;
						p_dot=0;
					}
					else
						p_dot=0;
				});
			}
			$.each(my.wingroup, function(index, winelement) {
				var p_dot=0;
				var temp;
				$.each(winelement, function(index, el) {
					var t_dot=p_dot;
					$.each(player, function(index, p_el) {
						if(p_el==el)
							++p_dot;
					});
					if(p_dot==t_dot)
						temp=el;
				});
				if(p_dot==3)
				{
					++my.win;
					my.gameover=true;
					console.log("it's over");
				}
				else if(p_dot==2 && my.circle==1 && !my.gameover  && $('#'+temp).text()=="" && !chooseb)
				{
					// my.choose(temp);
					chooseb=true;
					truetemp=temp;
					p_dot=0;
				}
				else
					p_dot=0;
			});
			if(chooseb)
				this.choose(truetemp);
			else if(this.circle==1)
			{
				if(this.mode==1)
					this.choose("20");
				else if(this.mode==2)
					this.choose("21");
				for(i=0;i!=23;)
				{
					console.log("planb");
					if(this.circle==0)
						break;
					if(i<10)
					{
						this.choose('0'+String(i));
						if(i<2)
							++i;
						else
							i=10;
					}
					else
					{
						this.choose(String(i));
						if(i==12)
							i=20;
						else
							++i;
					}
				}
			}
		},
		restart(){
			this.player1=[];
			this.player2=[];
			this.gameover=false;
			this.round=0;
			this.circle=0;
			this.winner="";
			this.win=0;
			for(var i=0;i<3;i++)
			{
				for(var j=0;j<3;j++)
					$('#'+String(i)+String(j)).text("");
			}
		},
	},
});