class Solution {
  public String bestHand(int[] ranks, char[] suits) {
    Set<Character> suitsSet = new HashSet<>();
    for (int index = 0; index < suits.length; index++){
      suitsSet.add(suits[index]);
    }
    if (suitsSet.size() == 1){
      return "Flush";
    }
    
    Map<Integer, Integer> ranksDictionary = new HashMap<>();
    for (int index = 0; index < ranks.length; index++){
      int rank = ranks[index];
      if (ranksDictionary.containsKey(rank)){
        ranksDictionary.put(rank, ranksDictionary.get(rank) + 1);
      }
      else{
        ranksDictionary.put(rank, 1);
      }
    }
    
    String result = "";

    for (Map.Entry<Integer, Integer> rank : ranksDictionary.entrySet()){
      if (rank.getValue() > 2){
        result = "Three of a Kind";
      }
      else if (rank.getValue() > 1 && result == ""){
        result = "Pair";
      }
    }
    
    if (result == ""){
      result = "High Card";
    }

    return result;
  }
}