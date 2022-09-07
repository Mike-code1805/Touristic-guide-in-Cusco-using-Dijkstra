function connector(){
    graph.addVertex('0', {
        '1': weight(datos.features[0].geometry["coordinates"], datos.features[1].geometry["coordinates"]),
        '2': weight(datos.features[0].geometry["coordinates"], datos.features[2].geometry["coordinates"]), 
        '3': weight(datos.features[0].geometry["coordinates"], datos.features[3].geometry["coordinates"]),
        '4': weight(datos.features[0].geometry["coordinates"], datos.features[4].geometry["coordinates"]),
    });
    graph.addVertex('1', {
        '5': weight(datos.features[1].geometry["coordinates"], datos.features[5].geometry["coordinates"]),
        '6': weight(datos.features[1].geometry["coordinates"], datos.features[6].geometry["coordinates"]),
    });
    graph.addVertex('2', {
        '7': weight(datos.features[2].geometry["coordinates"], datos.features[7].geometry["coordinates"]),
        '8': weight(datos.features[2].geometry["coordinates"], datos.features[8].geometry["coordinates"]),
    });
    graph.addVertex('3', {
        '5': weight(datos.features[3].geometry["coordinates"], datos.features[5].geometry["coordinates"]),
        '7': weight(datos.features[3].geometry["coordinates"], datos.features[7].geometry["coordinates"]),
        '13': weight(datos.features[3].geometry["coordinates"], datos.features[13].geometry["coordinates"]),
    });
    graph.addVertex('4', {
        '6': weight(datos.features[4].geometry["coordinates"], datos.features[6].geometry["coordinates"]),
        '8': weight(datos.features[4].geometry["coordinates"], datos.features[8].geometry["coordinates"]),
        '9': weight(datos.features[4].geometry["coordinates"], datos.features[9].geometry["coordinates"]),
        '54': weight(datos.features[4].geometry["coordinates"], datos.features[54].geometry["coordinates"]),
    });
    graph.addVertex('5', {
        '6': weight(datos.features[5].geometry["coordinates"], datos.features[6].geometry["coordinates"]),
        '15': weight(datos.features[5].geometry["coordinates"], datos.features[15].geometry["coordinates"]),
    });
    graph.addVertex('6', {
        '4': weight(datos.features[6].geometry["coordinates"], datos.features[4].geometry["coordinates"]),
        '5': weight(datos.features[6].geometry["coordinates"], datos.features[5].geometry["coordinates"]),
        '55': weight(datos.features[6].geometry["coordinates"], datos.features[55].geometry["coordinates"]),
    });
    graph.addVertex('7', {
        '3': weight(datos.features[7].geometry["coordinates"], datos.features[3].geometry["coordinates"]),
        '8': weight(datos.features[7].geometry["coordinates"], datos.features[8].geometry["coordinates"]),
        '17': weight(datos.features[7].geometry["coordinates"], datos.features[17].geometry["coordinates"]),
    });
    graph.addVertex('8', {
        '4': weight(datos.features[8].geometry["coordinates"], datos.features[4].geometry["coordinates"]),
        '10': weight(datos.features[8].geometry["coordinates"], datos.features[10].geometry["coordinates"]),
    });
    graph.addVertex('9');
    graph.addVertex('10', {        
        '11': weight(datos.features[10].geometry["coordinates"], datos.features[11].geometry["coordinates"]),
        '37': weight(datos.features[10].geometry["coordinates"], datos.features[37].geometry["coordinates"]),
    });
    graph.addVertex('11', {        
        '12': weight(datos.features[11].geometry["coordinates"], datos.features[12].geometry["coordinates"]),
    });
    graph.addVertex('12', {        
        '64': weight(datos.features[12].geometry["coordinates"], datos.features[64].geometry["coordinates"]),
    });
    graph.addVertex('13', {        
        '14': weight(datos.features[13].geometry["coordinates"], datos.features[14].geometry["coordinates"]),
    });
    graph.addVertex('14', {        
        '16': weight(datos.features[14].geometry["coordinates"], datos.features[16].geometry["coordinates"]),
        '19': weight(datos.features[14].geometry["coordinates"], datos.features[19].geometry["coordinates"]),
        '21': weight(datos.features[14].geometry["coordinates"], datos.features[21].geometry["coordinates"]),
    });
    graph.addVertex('15', {        
        '16': weight(datos.features[15].geometry["coordinates"], datos.features[16].geometry["coordinates"]),
    });
    graph.addVertex('16', {        
        '21': weight(datos.features[16].geometry["coordinates"], datos.features[21].geometry["coordinates"]),
    });
    graph.addVertex('17', {        
        '18': weight(datos.features[17].geometry["coordinates"], datos.features[18].geometry["coordinates"]),
    });
    graph.addVertex('18', {        
        '19': weight(datos.features[18].geometry["coordinates"], datos.features[19].geometry["coordinates"]),
        '36': weight(datos.features[18].geometry["coordinates"], datos.features[36].geometry["coordinates"]),
    });
    graph.addVertex('19', {        
        '20': weight(datos.features[19].geometry["coordinates"], datos.features[20].geometry["coordinates"]),
    });
    graph.addVertex('20', {        
        '22': weight(datos.features[20].geometry["coordinates"], datos.features[22].geometry["coordinates"]),
    });
    graph.addVertex('21', {       
        '22': weight(datos.features[21].geometry["coordinates"], datos.features[22].geometry["coordinates"]), 
        '23': weight(datos.features[21].geometry["coordinates"], datos.features[23].geometry["coordinates"]),
    });
    graph.addVertex('22', {       
        '24': weight(datos.features[22].geometry["coordinates"], datos.features[24].geometry["coordinates"]), 
    });
    graph.addVertex('23', {       
        '25': weight(datos.features[23].geometry["coordinates"], datos.features[25].geometry["coordinates"]), 
        '26': weight(datos.features[23].geometry["coordinates"], datos.features[26].geometry["coordinates"]), 
    });
    graph.addVertex('24', {       
        '25': weight(datos.features[24].geometry["coordinates"], datos.features[25].geometry["coordinates"]), 
        '27': weight(datos.features[24].geometry["coordinates"], datos.features[27].geometry["coordinates"]), 
    });
    graph.addVertex('25', {       
        '26': weight(datos.features[25].geometry["coordinates"], datos.features[26].geometry["coordinates"]),
        '27': weight(datos.features[25].geometry["coordinates"], datos.features[27].geometry["coordinates"]),
    });
    graph.addVertex('26', {       
        '27': weight(datos.features[26].geometry["coordinates"], datos.features[27].geometry["coordinates"]),
    });
    graph.addVertex('27', {       
        '28': weight(datos.features[27].geometry["coordinates"], datos.features[28].geometry["coordinates"]),
    });
    graph.addVertex('28', {       
        '29': weight(datos.features[28].geometry["coordinates"], datos.features[29].geometry["coordinates"]),
    });
    graph.addVertex('29', {       
        '30': weight(datos.features[29].geometry["coordinates"], datos.features[30].geometry["coordinates"]),
    });
    graph.addVertex('30', {       
        '31': weight(datos.features[30].geometry["coordinates"], datos.features[31].geometry["coordinates"]),
        '32': weight(datos.features[30].geometry["coordinates"], datos.features[32].geometry["coordinates"]),
        '33': weight(datos.features[30].geometry["coordinates"], datos.features[33].geometry["coordinates"]),
    });
    graph.addVertex('31', {       
        '32': weight(datos.features[31].geometry["coordinates"], datos.features[32].geometry["coordinates"]),
        '34': weight(datos.features[31].geometry["coordinates"], datos.features[34].geometry["coordinates"]),
    });
    graph.addVertex('32', {       
        '34': weight(datos.features[32].geometry["coordinates"], datos.features[34].geometry["coordinates"]),
        '35': weight(datos.features[32].geometry["coordinates"], datos.features[35].geometry["coordinates"]),
    });
    graph.addVertex('33', {       
        '62': weight(datos.features[33].geometry["coordinates"], datos.features[62].geometry["coordinates"]),
    });
    graph.addVertex('34');
    graph.addVertex('35', {       
        '63': weight(datos.features[35].geometry["coordinates"], datos.features[63].geometry["coordinates"]),
    });
    graph.addVertex('36', {       
        '38': weight(datos.features[36].geometry["coordinates"], datos.features[38].geometry["coordinates"]),
    });
    graph.addVertex('37', {       
        '38': weight(datos.features[37].geometry["coordinates"], datos.features[38].geometry["coordinates"]),
        '39': weight(datos.features[37].geometry["coordinates"], datos.features[39].geometry["coordinates"]),
    });
    graph.addVertex('38', {       
        '40': weight(datos.features[38].geometry["coordinates"], datos.features[40].geometry["coordinates"]),
    });
    graph.addVertex('39', {       
        '40': weight(datos.features[39].geometry["coordinates"], datos.features[40].geometry["coordinates"]),
        '42': weight(datos.features[39].geometry["coordinates"], datos.features[42].geometry["coordinates"]),
    });
    graph.addVertex('40', {       
        '41': weight(datos.features[40].geometry["coordinates"], datos.features[41].geometry["coordinates"]),
    });
    graph.addVertex('41', {       
        '43': weight(datos.features[41].geometry["coordinates"], datos.features[43].geometry["coordinates"]),
    });
    graph.addVertex('42', {       
        '45': weight(datos.features[42].geometry["coordinates"], datos.features[45].geometry["coordinates"]),
        '51': weight(datos.features[42].geometry["coordinates"], datos.features[51].geometry["coordinates"]),
    });
    graph.addVertex('43', {       
        '44': weight(datos.features[43].geometry["coordinates"], datos.features[44].geometry["coordinates"]),
    });
    graph.addVertex('44', {       
        '48': weight(datos.features[44].geometry["coordinates"], datos.features[48].geometry["coordinates"]),
    });
    graph.addVertex('45', {       
        '46': weight(datos.features[45].geometry["coordinates"], datos.features[46].geometry["coordinates"]),
        '52': weight(datos.features[45].geometry["coordinates"], datos.features[52].geometry["coordinates"]),
    });
    graph.addVertex('46', {       
        '47': weight(datos.features[46].geometry["coordinates"], datos.features[47].geometry["coordinates"]),
    });
    graph.addVertex('47', {       
        '48': weight(datos.features[47].geometry["coordinates"], datos.features[48].geometry["coordinates"]),
        '49': weight(datos.features[47].geometry["coordinates"], datos.features[49].geometry["coordinates"]),
        '50': weight(datos.features[47].geometry["coordinates"], datos.features[50].geometry["coordinates"]),
    });
    graph.addVertex('48', {       
        '49': weight(datos.features[48].geometry["coordinates"], datos.features[49].geometry["coordinates"]),
    });
    graph.addVertex('49', {       
        '50': weight(datos.features[49].geometry["coordinates"], datos.features[50].geometry["coordinates"]),
    });
    graph.addVertex('50');
    graph.addVertex('51', {       
        '53': weight(datos.features[51].geometry["coordinates"], datos.features[53].geometry["coordinates"]),
    });
    graph.addVertex('52', {       
        '53': weight(datos.features[52].geometry["coordinates"], datos.features[53].geometry["coordinates"]),
    });
    graph.addVertex('53');
    graph.addVertex('54', {       
        '57': weight(datos.features[54].geometry["coordinates"], datos.features[57].geometry["coordinates"]),
    });
    graph.addVertex('55', {       
        '56': weight(datos.features[55].geometry["coordinates"], datos.features[56].geometry["coordinates"]),
    });
    graph.addVertex('56', {       
        '57': weight(datos.features[56].geometry["coordinates"], datos.features[57].geometry["coordinates"]),
    });
    graph.addVertex('57', {       
        '58': weight(datos.features[57].geometry["coordinates"], datos.features[58].geometry["coordinates"]),
    });
    graph.addVertex('58', {       
        '59': weight(datos.features[58].geometry["coordinates"], datos.features[59].geometry["coordinates"]),
    });
    graph.addVertex('59', {       
        '60': weight(datos.features[59].geometry["coordinates"], datos.features[60].geometry["coordinates"]),
    });
    graph.addVertex('60', {       
        '61': weight(datos.features[60].geometry["coordinates"], datos.features[61].geometry["coordinates"]),
    });
    graph.addVertex('61');
    graph.addVertex('62', {       
        '63': weight(datos.features[62].geometry["coordinates"], datos.features[63].geometry["coordinates"]),
    });
    graph.addVertex('63');
    graph.addVertex('64', {       
        '65': weight(datos.features[64].geometry["coordinates"], datos.features[65].geometry["coordinates"]),
    });
    graph.addVertex('65', {       
        '66': weight(datos.features[65].geometry["coordinates"], datos.features[66].geometry["coordinates"]),
        '67': weight(datos.features[65].geometry["coordinates"], datos.features[67].geometry["coordinates"]),
    });
    graph.addVertex('66', {       
        '68': weight(datos.features[66].geometry["coordinates"], datos.features[68].geometry["coordinates"]),
    });
    graph.addVertex('67', {       
        '69': weight(datos.features[67].geometry["coordinates"], datos.features[69].geometry["coordinates"]),
        '72': weight(datos.features[67].geometry["coordinates"], datos.features[72].geometry["coordinates"]),
    });
    graph.addVertex('68', {       
        '70': weight(datos.features[68].geometry["coordinates"], datos.features[67].geometry["coordinates"]),
        '71': weight(datos.features[68].geometry["coordinates"], datos.features[67].geometry["coordinates"]),
    });
    graph.addVertex('69', {       
        '70': weight(datos.features[69].geometry["coordinates"], datos.features[67].geometry["coordinates"]),
        '71': weight(datos.features[69].geometry["coordinates"], datos.features[67].geometry["coordinates"]),
    });
    graph.addVertex('70');
    graph.addVertex('71');
    graph.addVertex('72', {       
        '73': weight(datos.features[72].geometry["coordinates"], datos.features[73].geometry["coordinates"]),
        '74': weight(datos.features[72].geometry["coordinates"], datos.features[74].geometry["coordinates"]),
    });
    graph.addVertex('73', {       
        '75': weight(datos.features[73].geometry["coordinates"], datos.features[75].geometry["coordinates"]),
    });
    graph.addVertex('74', {       
        '75': weight(datos.features[74].geometry["coordinates"], datos.features[75].geometry["coordinates"]),
    });
    graph.addVertex('75');
}