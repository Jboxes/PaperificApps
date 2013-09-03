

// var count = 0;
// var ttcount = 0;
var loadItems = function(){



	var ItemDataRow = ItemData[0].rows;

	var startRow = "";
	startRow += "<div class=\"row\">";
	startRow += "<div class=\"col-sm-6 col-md-3\">";

	var stopRow = "";
	stopRow += "            <\/div>";
	stopRow += "          <\/div>";


	var genBlockItem = function(Title,Description){

	var blockItem = "";
		// blockItem += "              <li class=\"span4\">";
		blockItem += "                <div class=\"thumbnail\">";
		blockItem += "                  <img data-src=\"holder.js\/300x200\" alt=\"300x200\" class=\"hidden-phone\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAALWklEQVR4Xu3ai7NV4x\/H8ZVKCKFmQkQXty5TkZH+euQSUdQwDLoJoxJdXIt+810zu9mo35zFHPqc72vNmI5znrP353l\/nvOeZ639LLtw4cL1wYUAAggEEFhGWAEtiYgAAiMBwrIQEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqvr\/Qc+ePTt88cUXww8\/\/DBcvXp1WLVq1fDQQw8NmzdvHu66664\/\/HKN+eyzz4bvv\/9++O2338afP\/roo8MTTzwxLFu27G+PnYLy\/Pnzw6lTp4ZLly4Nv\/\/++5h33bp1w6ZNm8av56\/bIe+UuRm7eAQIa\/HY\/muvfPLkyVFAN7vuvPPO4aWXXrohgZ9++ml4++23h2vXrv1l+OOPPz4888wzN74\/ZeyUyZ47d2744IMPbvorJc99+\/YNK1asGH8+JcOUsVPyGnv7ECCs26eLv5Xk559\/Ht54443h+vXr447q2WefHf\/YS2KnT58eX\/Ppp58eNm7cOH790UcfDV999dU4Zvfu3cPq1auHzz\/\/fDhz5sz48\/379w\/33HPP5LFTwh84cGD45Zdfxp3drl27xn9PnDhx2+adMjdjF5cAYS0u30V\/9RJW3V7VtXbt2uHuu+8ev67bqLfeemv8esuWLeOtVl2vvPLKuLuqW8Bt27aN3yt5lETqeuqpp8Zbwyljv\/nmm+HYsWPj78zLsd7n4MGDQ2W89957hxdffHF87w8\/\/HAcWxkefvjhv2R47LHHRvFOyTB17KIX4w0WhQBhLQrW\/\/ZFS0C1a6qdVD2TqlvCEkaJ4\/XXX\/+LmOobr7766vjsqwSyY8eOSWPr92c7t+XLl4\/vV7u0jz\/+eNy51fdKVpXhVteFCxeGw4cPjz\/eunXr8OSTT07KMGVu\/2073v2fECCsf0LvNvvdeoD9zjvvjKnuuOOO4cEHHxx3Vg888MD4vfmf1+6qdjiz68033xx+\/PHH8bby+eefnzS2XqMe3td7186u3q92de+999748s8999ywYcOGW9Iq2Rw6dGjc6dWtaj3DqtvExcx7m1UnzgIJENYCQSUMm\/8Dr7y1o6kH6TNZ1KeC77777jiV7du3D4888siNadXtY8lmzZo1425oytjZi1y+fHkUT33qV7uqktj69euHnTt33hLflStXhvfff3\/cTdVVY+t36pqSYcrYhC5lvDkBwlpCK6MevNczotqp1K3Y7EH6bIezkB1LPQfbs2fPgnY3s7HzCOuowqeffjp+q44nvPzyyzc+8fsz6m+\/\/XY4evToKLbaEZZEZ7Kqsf9G3iVUf4upENYSrrmeV9XOZbZrmn\/OM\/9wvBDMHsbXrqvEMWXsPMISUJ0Jq6uen+3du3d8\/z9fdbShxpZkZ58W3nfffX8YNiXDlLFLuPIlPzXCCq\/4yy+\/HI4fPz78+uuvwwsvvHDjeVVNa3Z8oI4u1E6nrtdee20cO\/8p4a3+2KeMrdeuh\/z18L1EVZKq27T61LIews\/OVdW4ixcvjs+36tbx\/vvvH49X1Hmxm11TMkwZG1572\/iEFV79\/G1T7VDq9q\/++L\/++uvxk8K6Zrum+vqTTz4ZT8TPzmHVp3l16LRkU7dldQ5rdjJ+yth6YF8HUuv2ro5F1H\/1XKw+eZx\/\/5JUjavnZZWhdmArV678QwuVY\/a9KRmmjA2vvW18wloC1c+OFNxsKiWFeoheu6y66vlWfZpX\/\/75mj+vNWVsSage5pc8S4C1o6qH7rMdV71WHZWoIxPzZ7Zuhb4+LKhPCqdkmDp2CdTecgqEtURqr1vDEkTtXGqXU7usOqJQxxpmJ9dnU63dUO2qvvvuu3Fs3bbVSfibHT1YyNh6rTpZX1ftmGbHKOr\/jxw5MtTD9dlxhbodnB0yXYiwasxCMvyduS2R6ltNg7Ba1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaEfgfdT+2K3vNMooAAAAASUVORK5CYII=\">";
		blockItem += "                  <img data-src=\"holder.js\/300x200\" style=\"float:left\" alt=\"300x200\" width=\"100px\" class=\"visible-phone\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAALWklEQVR4Xu3ai7NV4x\/H8ZVKCKFmQkQXty5TkZH+euQSUdQwDLoJoxJdXIt+810zu9mo35zFHPqc72vNmI5znrP353l\/nvOeZ639LLtw4cL1wYUAAggEEFhGWAEtiYgAAiMBwrIQEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqhIUAQQIyxpAAIEYAoQVU5WgCCBAWNYAAgjEECCsmKoERQABwrIGEEAghgBhxVQlKAIIEJY1gAACMQQIK6YqQRFAgLCsAQQQiCFAWDFVCYoAAoRlDSCAQAwBwoqpSlAEECAsawABBGIIEFZMVYIigABhWQMIIBBDgLBiqvr\/Qc+ePTt88cUXww8\/\/DBcvXp1WLVq1fDQQw8NmzdvHu66664\/\/HKN+eyzz4bvv\/9++O2338afP\/roo8MTTzwxLFu27G+PnYLy\/Pnzw6lTp4ZLly4Nv\/\/++5h33bp1w6ZNm8av56\/bIe+UuRm7eAQIa\/HY\/muvfPLkyVFAN7vuvPPO4aWXXrohgZ9++ml4++23h2vXrv1l+OOPPz4888wzN74\/ZeyUyZ47d2744IMPbvorJc99+\/YNK1asGH8+JcOUsVPyGnv7ECCs26eLv5Xk559\/Ht54443h+vXr447q2WefHf\/YS2KnT58eX\/Ppp58eNm7cOH790UcfDV999dU4Zvfu3cPq1auHzz\/\/fDhz5sz48\/379w\/33HPP5LFTwh84cGD45Zdfxp3drl27xn9PnDhx2+adMjdjF5cAYS0u30V\/9RJW3V7VtXbt2uHuu+8ev67bqLfeemv8esuWLeOtVl2vvPLKuLuqW8Bt27aN3yt5lETqeuqpp8Zbwyljv\/nmm+HYsWPj78zLsd7n4MGDQ2W89957hxdffHF87w8\/\/HAcWxkefvjhv2R47LHHRvFOyTB17KIX4w0WhQBhLQrW\/\/ZFS0C1a6qdVD2TqlvCEkaJ4\/XXX\/+LmOobr7766vjsqwSyY8eOSWPr92c7t+XLl4\/vV7u0jz\/+eNy51fdKVpXhVteFCxeGw4cPjz\/eunXr8OSTT07KMGVu\/2073v2fECCsf0LvNvvdeoD9zjvvjKnuuOOO4cEHHxx3Vg888MD4vfmf1+6qdjiz68033xx+\/PHH8bby+eefnzS2XqMe3td7186u3q92de+999748s8999ywYcOGW9Iq2Rw6dGjc6dWtaj3DqtvExcx7m1UnzgIJENYCQSUMm\/8Dr7y1o6kH6TNZ1KeC77777jiV7du3D4888siNadXtY8lmzZo1425oytjZi1y+fHkUT33qV7uqktj69euHnTt33hLflStXhvfff3\/cTdVVY+t36pqSYcrYhC5lvDkBwlpCK6MevNczotqp1K3Y7EH6bIezkB1LPQfbs2fPgnY3s7HzCOuowqeffjp+q44nvPzyyzc+8fsz6m+\/\/XY4evToKLbaEZZEZ7Kqsf9G3iVUf4upENYSrrmeV9XOZbZrmn\/OM\/9wvBDMHsbXrqvEMWXsPMISUJ0Jq6uen+3du3d8\/z9fdbShxpZkZ58W3nfffX8YNiXDlLFLuPIlPzXCCq\/4yy+\/HI4fPz78+uuvwwsvvHDjeVVNa3Z8oI4u1E6nrtdee20cO\/8p4a3+2KeMrdeuh\/z18L1EVZKq27T61LIews\/OVdW4ixcvjs+36tbx\/vvvH49X1Hmxm11TMkwZG1572\/iEFV79\/G1T7VDq9q\/++L\/++uvxk8K6Zrum+vqTTz4ZT8TPzmHVp3l16LRkU7dldQ5rdjJ+yth6YF8HUuv2ro5F1H\/1XKw+eZx\/\/5JUjavnZZWhdmArV678QwuVY\/a9KRmmjA2vvW18wloC1c+OFNxsKiWFeoheu6y66vlWfZpX\/\/75mj+vNWVsSage5pc8S4C1o6qH7rMdV71WHZWoIxPzZ7Zuhb4+LKhPCqdkmDp2CdTecgqEtURqr1vDEkTtXGqXU7usOqJQxxpmJ9dnU63dUO2qvvvuu3Fs3bbVSfibHT1YyNh6rTpZX1ftmGbHKOr\/jxw5MtTD9dlxhbodnB0yXYiwasxCMvyduS2R6ltNg7Ba1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaESCsVnWbLALZBAgruz\/pEWhFgLBa1W2yCGQTIKzs\/qRHoBUBwmpVt8kikE2AsLL7kx6BVgQIq1XdJotANgHCyu5PegRaEfgfdT+2K3vNMooAAAAASUVORK5CYII=\">";
		blockItem += "                  <div class=\"caption\" style=\"height:80px\">";
		blockItem += "                    <p>"+Description+ "<\/p>";
		// blockItem += "                    <p><a href=\"#\" class=\"btn btn-success\">Action<\/a> <a href=\"#\" class=\"btn\">Action<\/a><\/p>";
		blockItem += "                  <\/div>";
		blockItem += "                <\/div>";
		// blockItem += "              <\/li>";
		return blockItem;
	}

	var returnStr = "";
	var j = 0;
	for (var i = 0; i < ItemDataRow.length; i++) {
		if(ItemDataRow[i][9] == "INSTORESALE"){

			if(j%3==0){
				if(j != 0){
					returnStr += stopRow;
				}
				returnStr += startRow + genBlockItem(ItemDataRow[i][3],ItemDataRow[i][8]);
				
			}
			else{
				returnStr += genBlockItem(ItemDataRow[i][3],ItemDataRow[i][8]);	
			}
			j++;
			
			// count++;
		}
		// ttcount++;
	};

	return returnStr;
}

var pageRedirection = function(Page){

	window.location.assign(Page);
}

var addMoreItem = function(){

	alert("I am hit.")
}


 // loadItems();
 // alert(count);
 // alert(ttcount);