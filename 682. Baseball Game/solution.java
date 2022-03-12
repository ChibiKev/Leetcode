class Solution {
  public int calPoints(String[] ops) {
    List<Integer> record = new ArrayList<Integer>();
    for (int index = 0; index < ops.length; index++){
      String op = ops[index];
      if (op.equals("+")){
        record.add(record.get(record.size() - 1) + record.get(record.size() - 2));
      }
      else if (op.equals("D")){
        record.add(record.get(record.size() - 1) * 2);
      }
      else if (op.equals("C")){
        record.remove(record.size() - 1);
      }
      else{
        record.add(Integer.parseInt(op));
      }
    }

    int total = 0;
    for (int index = 0; index < record.size(); index++){
      int num = record.get(index);
      total += num;
    }

    return total;
  }
}